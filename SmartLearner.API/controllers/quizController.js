const accountService = require("../services/accountService");
const quizService = require("../services/quizService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class QuizController {
  async addNewQuiz(req, res, next) {
    try {
      var quizData = req.body;
      console.log(quizData);
      const quiz = await quizService.createQuizAsync(quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async getQuestion(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const response = await quizService.getRandomQuiz(req.userId);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  
  async answerQuestion(req, res, next) {
    try {
      var quizData = req.body;
      console.log(req.userId,"req.req.");
      quizData.userId=req.userId
      if (!quizData.questionId) {
        return res.status(400).json({
          message: "Question ID is required",
          statusCode: 400,
          success: false,
          data: null
        });
      }
      if (!quizData.answer) {
        return res.status(400).json({
          message: "Answer is required",
          statusCode: 400,
          success: false,
          data: null
        });
      }
      
      const quiz = await quizService.answerQuizAsync(quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new QuizController();
