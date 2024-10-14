const accountService = require("../services/accountService");
const quizService = require("../services/quizService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class QuizController {
  async addNewQuiz(req, res, next) {
    try {
      var quizData = req.body;
      quizData["option"]=quizData.option.split(",")
      quizData["optionImage"]=[
        quizData.option1Image,
        quizData.option2Image,
        quizData.option3Image,
        quizData.option4Image
      ]
      delete quizData.option1Image
      delete quizData.option2Image
      delete quizData.option3Image
      delete quizData.option4Image
      const quiz = await quizService.createQuizAsync(quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  async updateQuiz(req, res, next) {
    try {
      var quizData = req.body;
      quizData["option"]=quizData.option.split(",")
      const quiz = await quizService.updateQuizAsync(req.params.id,quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  async getQuestion(req, res, next) {
    try {
      const response = await quizService.getRandomQuiz(req.userId,req.params.cid);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getQuestionCatName(req, res, next) {
    try {
      const response = await quizService.getRandomQuizCatName(req.userId,req.params.cid);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getQuestionId(req, res, next) {
    try {

      const { page, pagesize, search } = req.query;

      const response = await quizService.getRandomQuiz(req.userId,req.params.cid,req.params.id);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  

  async getOneQuestion(req, res, next) {
    try {
      
      const response = await quizService.getOneQuizAsync(req.params.id);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async answerQuestion(req, res, next) {
    try {
      var quizData = req.body;

      quizData["userId"]=req.userId
      const response = await quizService.answerQuizAsync(quizData);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }


  async getAllQuiz(req, res, next) {
    try {
      
      const { page, pagesize, search } = req.query;
      const result = await quizService.getAllQuizAsync(page, pagesize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  async getAllQuizModule(req, res, next) {
    try {
      
      const { page, pagesize, search } = req.query;
      const result = await quizService.getAllQuizModuleAsync(page, pagesize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  

  async getOneQuizModule(req, res, next) {
    try {
      
      const result = await quizService.getOneQuizModuleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  


  async getQuizResult(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;

      
      const result = await quizService.getQuizResultAsync(req.userId,page, pagesize, search,req.params.resType);
      res.json(result);
    } catch (err) {

      next(err);
    }
  }


  async getQuizCategory(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await quizService.getQuizCategoryAsync(page, pageSize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  async getListQuizCategory(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await quizService.getListQuizCategoryAsync();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async oneQuizCategory(req, res, next) {
    try {
      const result = await quizService.getOneQuizCategoryAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  async oneQuizCategoryModule(req, res, next) {
    try {
      const result = await quizService.getOneQuizCategoryModuleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  


  
  async addQuizCategory(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.createQuizCategoryAsync(quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  
  async updateQuizCategory(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.updateQuizCategoryAsync(req.params.id,quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  async deleteQuizCategory(req, res, next) {
    try {
      const result = await quizService.deleteQuizModuleCategoryAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  
  async addQuizModule(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.createQuizModuleAsync(quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  
  async updateQuizModule(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.updateQuizModuleAsync(req.params.id,quizData);
      
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }


  async deleteQuizModule(req, res, next) {
    try {
      const result = await quizService.deleteQuizModuleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async deleteQuiz(req, res, next) {
    try {
      const result = await quizService.deleteQuizAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  

  // async addNewQuiz(req, res, next) {
  //   try {
  //     var quizData = req.body;
  //     const quiz = await quizService.createQuizAsync(quizData);
      
  //     res.status(201).json(quiz);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

}

module.exports = new QuizController();
