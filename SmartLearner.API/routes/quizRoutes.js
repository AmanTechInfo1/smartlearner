const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const quizController = require("../controllers/quizController");
const { requireAuth } = require("../middlewares/authMiddleware");

router.post("/addQuestion", upload.none(),requireAuth, quizController.addNewQuiz);
router.post("/answerQuestion", requireAuth, quizController.answerQuestion);
router.get("/getRandomQuestion", requireAuth, quizController.getQuestion);
router.get("/getQuizCategory", requireAuth, quizController.getQuizCategory);
router.get("/quizCategory/:id", requireAuth, quizController.oneQuizCategory);
router.post("/addQuizCategory", requireAuth, quizController.addQuizCategory);
router.post("/updateQuizCategory/:id", requireAuth, quizController.updateQuizCategory);
router.post("/delete-quizCategory/:id", requireAuth, quizController.deleteQuizCategory);


module.exports = router;