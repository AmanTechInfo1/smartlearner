const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

router.post('/add-role', upload.none(), requireAuth, roleController.createRole);
router.get('/all-roles', requireAuth, roleController.getRoles);
router.get('/rolelist', requireAuth, roleController.getRoleList);
router.get('/role/:id', requireAuth, roleController.getRoleById);
router.post('/update-role/:id', upload.none(), requireAuth, roleController.updateRole);
router.post('/delete-role/:id', upload.none(), requireAuth, roleController.deleteRole);

module.exports = router;