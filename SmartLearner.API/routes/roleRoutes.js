const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

router.post('/add-role', upload.none(), requireAuth, roleController.createRole);
router.get('/all-roles', requireAuth, roleController.getRoles);
router.get('/rolelist', roleController.getRoleList);
router.get('/role/:id', roleController.getRoleById);
router.post('/update-role/:id', roleController.updateRole);
router.delete('/roles/:id', roleController.deleteRole);

module.exports = router;