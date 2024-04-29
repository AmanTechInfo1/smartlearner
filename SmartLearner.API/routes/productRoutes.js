const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

//Category Routes
router.post('/add-category', upload.none(), requireAuth, categoryController.createCategory);
router.get('/get-categories', upload.none(), requireAuth, categoryController.getCategories);

router.post('/add-product', upload.none(), requireAuth, productController.createProduct);

module.exports = router;