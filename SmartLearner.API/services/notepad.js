const NotepadUserQuestion = require("../models/notepadQuestion");
const NotepadAnswere = require("../models/notepadAnswere");

// Create a new Notepad User Question

class NotepadServices {
  async createNotepadQuestion(userId, notepadQuestion) {
    try {
      const question = new NotepadUserQuestion({
        userId,
        notepadQuestion,
      });
      const savedQuestion = await question.save();
      const resultObject = {
        message: "Notepad question created successfully",
        statusCode: 200,
        success: true,
        data: savedQuestion,
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

  // Get all Notepad User Questions for a specific user
  async getNotepadQuestions(userId) {
    try {
      const questions = await NotepadUserQuestion.find({ userId }).populate(
        "userId",
        "notepadQuestion"
      );
      const resultObject = {
        message: "Notepad questions fetched successfully",
        statusCode: 200,
        success: true,
        data: { questions },
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

  // Create an answer for a specific Notepad User Question
  async createNotepadAnswere(notepadQuestionId, notepadAnwere) {
    try {
      const answer = new NotepadAnswere({
        notepadQuestionId,
        notepadAnwere,
      });
      const savedAnswer = await answer.save();
      const resultObject = {
        message: "Notepad answer created successfully",
        statusCode: 201,
        success: true,
        data: savedAnswer,
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

  // Get all answers for a specific Notepad User Question
  async getNotepadAnswers(notepadQuestionId) {
    try {
      const answers = await NotepadAnswere.find({ notepadQuestionId }).populate(
        "notepadQuestionId"
      );
      const resultObject = {
        message: "Notepad answers fetched successfully",
        statusCode: 200,
        success: true,
        data: { answers },
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
}

module.exports = new NotepadServices();
