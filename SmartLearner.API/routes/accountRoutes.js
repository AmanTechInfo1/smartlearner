const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/register', accountController.registerUser);
router.post('/login', accountController.loginUser);
// router.get('/protected-route', authMiddleware, accountController.protectedRoute);

module.exports = router;
