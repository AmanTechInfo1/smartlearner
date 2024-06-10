const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { requireAuth } = require("../middlewares/authMiddleware");
const dashboardController = require("../controllers/dashboardController");

router.get("/getDashboardCards",requireAuth, dashboardController.getDashboardCards);

module.exports = router;