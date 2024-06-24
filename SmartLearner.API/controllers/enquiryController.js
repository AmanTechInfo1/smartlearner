const Enquiry = require("../models/EnquiryModel");

const enquiryForm = async (req, res) => {
  try {
    const response = req.body;
    console.log(response,"dasfhgdsasfsdsfgdsfgfdsf")
   
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = enquiryForm;
