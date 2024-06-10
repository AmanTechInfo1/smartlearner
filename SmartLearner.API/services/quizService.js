const { ObjectId } = require('mongodb');
const AttemptQuizQuestion = require('../models/attemptQuizQuestionModel');
const QuizQuestion = require('../models/quizQuestionModel');
const QuizCategoryModel = require('../models/quizCategoryModel');

class quizService {
  async createQuizAsync(quizData) {
    try {
      const quiz = await QuizQuestion.create(quizData);
      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }


  async getQuizCategoryAsync() {
    try {
      const quiz = await QuizCategoryModel.find();
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {

      console.log(err,"errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }



  

  async deleteQuizCategoryAsync(categoryId) {
    try {
      await QuizCategoryModel.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 201,
        success: true,
        data: null,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getOneQuizCategoryAsync(id) {
    try {
      const quiz = await QuizCategoryModel.findById(id);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {

      console.log(err,"errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }


  

  async createQuizCategoryAsync(quizData) {
    try {

      console.log(quizData,"quizDataquizDataquizData")
      const quiz = await QuizCategoryModel.create(quizData);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {
      console.log(err,"errerrerrerrerr")
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }
  async updateQuizCategoryAsync(uId,quizData) {
    try {

      console.log(quizData,"quizDataquizDataquizData")
      const quiz = await QuizCategoryModel.findByIdAndUpdate(uId,quizData);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {
      console.log(err,"errerrerrerrerr")
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }



  



  async answerQuizAsync(quizData) {
    try {

      // const quiz = await QuizQuestion.create(quizData);
      console.log(quizData.questionId, "quizData")
      const getQuizQuestion = await QuizQuestion.find({ "_id": quizData.questionId });
      if (getQuizQuestion.length == 0) {
        const resultObject = {
          message: "Question Id is not valid",
          statusCode: 400,
          success: false,
          data: null
        };
        return resultObject;
      }
      if (getQuizQuestion[0]["answer"] == quizData["answer"]) {
        quizData["answerAttempt"] = "Correct"
      } else {
        quizData["answerAttempt"] = "Incorrect"
      }
      const quiz = await AttemptQuizQuestion.create(quizData);
      const resultObject = {
        message: "Quiz Response Successfully",
        statusCode: 201,
        success: true,
        data: quizData
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerr")
      const resultObject = {
        message: "Quiz Answer failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }

  async getRandomQuiz(userId) {
    try {
      
      let aggr = [
        {
          '$lookup': {
            'from': 'attemptquizquestions',
            'localField': '_id',
            'foreignField': 'questionId',
            'pipeline': [
              {
                '$match': {
                  'userId': new ObjectId(userId)
                }
              }
            ],
            'as': 'result'
          }
        }, {
          '$addFields': {
            'sizeRes': {
              '$size': '$result'
            },
            'questionId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$match': {
            'sizeRes': 0
          }
        }, {
          '$project': {
            'result': 0,
            'answer': 0,
            'sizeRes': 0,
            '_id': 0
          }
        }
      ]

      const products = await QuizQuestion.aggregate(aggr);
      const resultObject = {
        message: products.length>0?"Question fetched successfully":"No Question Available",
        statusCode: products.length>0?200:400,
        success: true,
        data: products.length>0?products[0]:{},
      };
      return resultObject;
    } catch (err) {
      console.log(err)
      const resultObject = {
        message: "Could not fetch products",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
}

module.exports = new quizService();
