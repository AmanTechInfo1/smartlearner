const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const postcodeController = require('../controllers/postcodeController');

const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

//Category Routes
router.post('/add-category', upload.none(), requireAuth, categoryController.createCategory);
router.get('/get-categories', upload.none(), requireAuth, categoryController.getCategories);
router.post('/update-category', upload.none(), requireAuth, categoryController.updateCategory);
router.post('/delete-category', upload.none(), requireAuth, categoryController.deleteCategory);

//Postcode Routes
router.post('/add-postcode', upload.none(), requireAuth, postcodeController.createPostcode);
router.get('/get-postcodes', upload.none(), requireAuth, postcodeController.getPostcodes);
router.post('/update-postcode', upload.none(), requireAuth, postcodeController.updatePostcode);
router.post('/delete-postcode', upload.none(), requireAuth, postcodeController.deletePostcode);

//Product Routes
router.post('/add-product', upload.none(), requireAuth, productController.createProduct);
router.get('/get-products', upload.none(), requireAuth, productController.getProducts);

module.exports = router;