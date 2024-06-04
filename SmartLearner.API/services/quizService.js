const { ObjectId } = require('mongodb');
const AttemptQuizQuestion = require('../models/attemptQuizQuestionModel');
const QuizQuestion = require('../models/quizQuestionModel');

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
