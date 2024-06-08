const mongoose = require("mongoose");

const AttemptQuizQuestionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref:"quizquestions" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref:"users" },
  answer: { type: String, required: true },
  answerAttempt: { type: String, required: true }
});
const AttemptQuizQuestion = mongoose.model("attemptQuizQuestion", AttemptQuizQuestionSchema);
module.exports = AttemptQuizQuestion;