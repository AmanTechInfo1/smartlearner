const mongoose = require("mongoose");

const notepadQuestionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  notepadQuestion: { type: String },
});

const NotepadUserQuestion = mongoose.model(
  "NotepadUserQuestion",
  notepadQuestionSchema
);
module.exports = NotepadUserQuestion;
