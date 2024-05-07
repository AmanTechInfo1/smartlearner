const express = require("express");
const router = express.Router();

const enquiryForm = require("../controllers/enquiryController");
router.route("/enquiry").post(enquiryForm);
module.exports = router;
