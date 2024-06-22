const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

router.post('/CompleteCheckout', upload.none(),requireAuth, OrderController.CompleteCheckout);
router.get('/getMyOrder', upload.none(),requireAuth, OrderController.getMyOrder);
router.get('/getAllOrder', upload.none(),requireAuth, OrderController.getAllOrder);
router.get('/getOrder/:id', upload.none(),requireAuth, OrderController.getOneOrder);
router.post('/generate_hash', upload.none(),requireAuth, OrderController.generate_hash);
router.post('/paymentSuccess', upload.none(), OrderController.paymentSuccess);
router.post('/paymentFailed', upload.none(), OrderController.paymentFailed);

module.exports = router;