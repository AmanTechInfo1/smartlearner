const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const quizController = require("../controllers/quizController");
const { requireAuth } = require("../middlewares/authMiddleware");
const { imageSaverMiddleware } = require("../middlewares/imageSaverMiddleware");

router.post("/addQuestion", imageSaverMiddleware,requireAuth, quizController.addNewQuiz);
router.post("/updateQuestion/:id", imageSaverMiddleware,requireAuth, quizController.updateQuiz);

router.post("/answerQuestion", requireAuth, quizController.answerQuestion);
router.get("/all-quizzes", requireAuth, quizController.getAllQuiz);
router.get("/getQuizResult/:resType", requireAuth, quizController.getQuizResult);
router.get("/quiz/:id", requireAuth, quizController.getOneQuestion);
router.get("/getRandomQuestion/:cid/:id", requireAuth, quizController.getQuestionId);
router.get("/getRandomQuestion/:cid", requireAuth, quizController.getQuestion);
router.get("/getQuizCategory", requireAuth, quizController.getQuizCategory);
router.get("/quizCategorylist", requireAuth, quizController.getListQuizCategory);
router.get("/quizCategory/:id", requireAuth, quizController.oneQuizCategory);
router.get("/quizCategoryModule/:id", requireAuth, quizController.oneQuizCategoryModule);
router.post("/addQuizCategory", requireAuth, quizController.addQuizCategory);
router.post("/updateQuizCategory/:id", requireAuth, quizController.updateQuizCategory);
router.post("/delete-quizCategory/:id", requireAuth, quizController.deleteQuizCategory);

router.post("/delete-quiz/:id", requireAuth, quizController.deleteQuiz);




router.get("/all-quizzesModule", requireAuth, quizController.getAllQuizModule);
router.get("/quizModule/:id", requireAuth, quizController.getOneQuizModule);
router.post("/addquizModule",imageSaverMiddleware, requireAuth,quizController.addQuizModule);
router.post("/updatequizModule/:id", imageSaverMiddleware,requireAuth, quizController.updateQuizModule);
router.get("/delete-quizModule/:id", requireAuth, quizController.deleteQuizModule);


module.exports = router;