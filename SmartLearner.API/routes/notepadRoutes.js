const express = require("express");
const router = express.Router();
const NotepadController = require("../controllers/NotepadController");

// Route to create a Notepad Question
router.post("/question", NotepadController.createNotepadQuestion);

router.get("/questions/:userId", NotepadController.getNotepadQuestions);

router.post("/answer", NotepadController.createNotepadAnswere);

router.get("/answers/:notepadQuestionId", NotepadController.getNotepadAnswers);

module.exports = router;
