const NotepadServices = require("../services/notepad");

class NotepadController {
  // Create a new Notepad Question
  async createNotepadQuestion(req, res) {
    try {
      const { userId, notepadQuestion } = req.body;
      const question = await NotepadServices.createNotepadQuestion(
        userId,
        notepadQuestion
      );
      res.status(201).json({ success: true, question });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get all Notepad Questions for a user
  async getNotepadQuestions(req, res) {
    try {
      const { userId } = req.params;
      const questions = await NotepadServices.getNotepadQuestions(userId);
      res.status(200).json({ success: true, questions });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Create a new Notepad Answer
  async createNotepadAnswere(req, res) {
    try {
      const { notepadQuestionId, notepadAnwere } = req.body;
      const answer = await NotepadServices.createNotepadAnswere(
        notepadQuestionId,
        notepadAnwere
      );
      res.status(201).json({ success: true, answer });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get all answers for a Notepad Question
  async getNotepadAnswers(req, res) {
    try {
      const { notepadQuestionId } = req.params;
      const answers = await NotepadServices.getNotepadAnswers(
        notepadQuestionId
      );
      res.status(200).json({ success: true, answers });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new NotepadController();
