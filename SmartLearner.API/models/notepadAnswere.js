const mongoose = require("mongoose");

const notepadAnswereSchema = new mongoose.Schema({
  notepadQuestionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NotepadUserQuestion",
  },
  notepadAnwere: { type: String },
});

const NotepadAnswere = mongoose.model("NotepadAnswere", notepadAnswereSchema);
module.exports = NotepadAnswere;
