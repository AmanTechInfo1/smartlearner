const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const accountController = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', upload.none(), accountController.registerUser);
router.post('/login', upload.none(), accountController.loginUser);
router.get('/users', authMiddleware, accountController.getAllUsers);

module.exports = router;
