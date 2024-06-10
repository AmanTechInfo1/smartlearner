const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  option: { type: Array, required: true },
  answer: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'quizCategory' }
});
const QuizQuestion = mongoose.model("quizQuestion", QuizQuestionSchema);
module.exports = QuizQuestion;
