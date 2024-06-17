const { ObjectId } = require('mongodb');
const AttemptQuizQuestion = require('../models/attemptQuizQuestionModel');
const QuizQuestion = require('../models/quizQuestionModel');
const QuizCategoryModel = require('../models/quizCategoryModel');
const QuizModuleModel = require('../models/quizModuleModel');

class quizService {
  async createQuizAsync(quizData) {
    try {

      console.log("quizDataquizData", quizData, "quizDataquizData")
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

      console.log(err, "dsandj,asndkjsa")
      const resultObject = {
        message: "Quiz add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }



  async updateQuizAsync(quizId, quizData) {
    try {

      console.log("quizDataquizData", quizData, "quizDataquizData")
      const quiz = await QuizQuestion.findByIdAndUpdate(quizId, quizData);
      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Updated Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {

      console.log(err, "dsandj,asndkjsa")
      const resultObject = {
        message: "Quiz update failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }


  async getQuizCategoryAsync() {
    try {


      let aggr = [
        {
          '$lookup': {
            'from': 'quizmodules',
            'localField': '_id',
            'foreignField': 'category',
            'as': 'result'
          }
        }, {
          '$addFields': {
            'count': {
              '$size': '$result'
            }
          }
        }
      ]
      const quiz = await QuizCategoryModel.aggregate(aggr);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }


  async getQuizModuleAsync(id) {
    try {


      let aggr = [
        {
          '$match': {
            'category': new ObjectId(id)
          }
        }, {
          '$lookup': {
            'from': 'quizquestions',
            'localField': '_id',
            'foreignField': 'module',
            'as': 'result'
          }
        }, {
          '$addFields': {
            'count': {
              '$size': '$result'
            }
          }
        }
      ]
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }

  async getListQuizCategoryAsync() {
    try {
      const quiz = await QuizCategoryModel.find();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }




  async getAllQuizAsync(pageNumber, pageSize, query) {
    try {

      console.log(pageNumber, pageSize, query, "pageNumber, pageSize, query")
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }

      // console.log(skip,"skipskipskip",pageSize)

      let aggr = [
        {
          '$addFields': {
            'uId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$lookup': {
            'from': 'quizcategories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'quizmodules',
            'localField': 'module',
            'foreignField': '_id',
            'as': 'moduleresult'
          }
        }, {
          '$unwind': {
            'path': '$moduleresult',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'categoryName': '$result.name',
            'moduleName': '$moduleresult.moduleName'
          }
        }, {
          '$skip': skip
        }, {
          '$limit': +pageSize || 20
        }
      ]



      console.log(aggr, "aggraggraggr")


      const quizzes = await QuizQuestion.aggregate(aggr);
      const totalCount = await QuizQuestion.countDocuments(filter);
      // const quizzes = await QuizQuestion.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizzes, totalCount },
      };

      return resultObject;
    } catch (err) {
      console.log(err, "errerrerr")
      throw new Error("Could not fetch postcodes");
    }
  }




  async getAllQuizModuleAsync(pageNumber, pageSize, query) {
    try {

      console.log(pageNumber, pageSize, query, "pageNumber, pageSize, query")
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }

      // console.log(skip,"skipskipskip",pageSize)

      let aggr = [
        {
          '$addFields': {
            'uId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$lookup': {
            'from': 'quizcategories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'categoryName': '$result.name'
          }
        }, {
          '$skip': skip
        }, {
          '$limit': +pageSize || 20
        }
      ]



      console.log(aggr, "fegwgdhqehdwgh")


      const quizzes = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments(filter);
      // const quizzes = await QuizQuestion.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizzes, totalCount },
      };

      return resultObject;
    } catch (err) {
      console.log(err, "errerrerr")
      throw new Error("Could not fetch postcodes");
    }
  }






  async getOneQuizModuleAsync(id) {
    try {


      let aggr = [
        {
          '$addFields': {
            'uId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$match': {
            'uId': id
          }
        }, {
          '$lookup': {
            'from': 'quizcategories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'categoryName': '$result.name'
          }
        }
      ]
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Module Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz[0]
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }







  async getQuizResultAsync(userId, pageNumber, pageSize, query, resType) {
    try {

      console.log(pageNumber, pageSize, query, "pageNumber, pageSize, query")
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }

      // console.log(skip,"skipskipskip",pageSize)

      let aggr = []
      if (resType == "quizResult") {
        aggr.push({
          '$match': {
            'userId': new ObjectId(userId)
          }
        })
      }

      aggr.push({
        '$lookup': {
          'from': 'quizquestions',
          'localField': 'questionId',
          'foreignField': '_id',
          'as': 'question'
        }
      }, {
        '$unwind': {
          'path': '$question',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$addFields': {
          'questioncategory': '$question.category',
          'questionmodule': '$question.module'
        }
      }, {
        '$lookup': {
          'from': 'quizcategories',
          'localField': 'questioncategory',
          'foreignField': '_id',
          'as': 'result'
        }
      }, {
        '$unwind': {
          'path': '$result',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'quizmodules',
          'localField': 'questionmodule',
          'foreignField': '_id',
          'as': 'moduleresult'
        }
      }, {
        '$unwind': {
          'path': '$moduleresult',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'users',
          'localField': 'userId',
          'foreignField': '_id',
          'as': 'user'
        }
      }, {
        '$unwind': {
          'path': '$user',
          'preserveNullAndEmptyArrays': true
        }
      })


      console.log(aggr, "aggraggraggr")


      const quizResult = await AttemptQuizQuestion.aggregate(aggr);
      const totalCount = await AttemptQuizQuestion.countDocuments(filter);
      // const quizzes = await QuizQuestion.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizResult, totalCount },
      };

      return resultObject;
    } catch (err) {
      console.log(err, "errerrerr")
      throw new Error("Could not fetch postcodes");
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



  async deleteQuizModuleAsync(categoryId) {
    try {
      await QuizModuleModel.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 200,
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



  async deleteQuizAsync(categoryId) {
    try {
      await QuizQuestion.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 200,
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






  async getOneQuizAsync(id) {
    try {


      let aggr = [
        {
          '$addFields': {
            'uId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$match': {
            'uId': id
          }
        }, {
          '$lookup': {
            'from': 'quizcategories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'categoryName': '$result.name'
          }
        }
      ]
      const quiz = await QuizQuestion.aggregate(aggr);
      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz[0]
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
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

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }



  async getOneQuizCategoryModuleAsync(id) {
    try {

      let aggr = [

        {
          '$match': {
            'category': new ObjectId(id)
          }
        },
        {
          '$addFields': {
            'uId': {
              '$toString': '$_id'
            }
          }
        }, {
          '$lookup': {
            'from': 'quizcategories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'categoryName': '$result.name'
          }
        }
      ]
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {

      console.log(err, "errerrerrerrerr")
      throw new Error("Could not fetch role");
    }
  }






  async createQuizCategoryAsync(quizData) {
    try {

      console.log(quizData, "quizDataquizDataquizData")
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
      console.log(err, "errerrerrerrerr")
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }
  async updateQuizCategoryAsync(uId, quizData) {
    try {

      console.log(quizData, "quizDataquizDataquizData")
      const quiz = await QuizCategoryModel.findByIdAndUpdate(uId, quizData);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {
      console.log(err, "errerrerrerrerr")
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }

  async createQuizModuleAsync(quizData) {
    try {

      console.log(quizData, "quizDataquizDataquizData")
      const quiz = await QuizModuleModel.create(quizData);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount }
      };
      return resultObject;
    } catch (err) {
      console.log(err, "errerrerrerrerr")
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }
  async updateQuizModuleAsync(uId, quizData) {
    try {

      console.log(quizData, "quizDataquizDataquizData")
      const quiz = await QuizModuleModel.findByIdAndUpdate(uId, quizData);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Module Updated Successfully",
        statusCode: 201,
        success: true,
        data: quiz
      };
      return resultObject;
    } catch (err) {
      console.log(err, "errerrerrerrerr")
      const resultObject = {
        message: "Quiz Module Updated failed",
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


      quizData["correctAnswer"] = getQuizQuestion[0]["answer"]
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

  async getRandomQuiz(userId, cid, moduleId = null) {
    try {

      let aggr = []
      if (moduleId != null) {
        aggr.push({
          '$match': {
            'module': new ObjectId(moduleId)
          }
        }
        )
      }


      console.log(aggr, "aggraggraggr800")
      aggr.push({
        '$match': {
          'category': new ObjectId(cid)
        }
      }, {
        '$lookup': {
          'from': 'attemptquizquestions',
          'localField': '_id',
          'foreignField': 'questionId',
          'pipeline': [
            {
              '$match': {
                'userId': {
                  '$eq': new ObjectId(userId)
                }
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
        '$lookup': {
          'from': 'quizcategories',
          'localField': 'category',
          'foreignField': '_id',
          'as': 'quizcategoriesresult'
        }
      }, {
        '$unwind': {
          'path': '$quizcategoriesresult',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'quizmodules',
          'localField': 'module',
          'foreignField': '_id',
          'as': 'quizmodulesresult'
        }
      }, {
        '$unwind': {
          'path': '$quizmodulesresult',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$addFields': {
          'quizCategory': '$quizcategoriesresult.name',
          'quizModuleName': '$quizmodulesresult.moduleName'
        }
      }, {
        '$project': {
          'result': 0,
          'answer': 0,
          'sizeRes': 0,
          '_id': 0
        }
      })


      console.log(aggr, "aggraggraggr")

      const products = await QuizQuestion.aggregate(aggr);


      console.log(products, aggr, userId, moduleId, "productsproducts")
      const resultObject = {
        message: products.length > 0 ? "Question fetched successfully" : "No Question Available",
        statusCode: products.length > 0 ? 200 : 400,
        success: true,
        data: products.length > 0 ? products[0] : {},
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
