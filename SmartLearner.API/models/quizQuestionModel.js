const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  option: { type: Array, required: true },
  answer: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'quizCategory' },
  module: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'quizmodules' }
});
const QuizQuestion = mongoose.model("quizQuestion", QuizQuestionSchema);
module.exports = QuizQuestion;
