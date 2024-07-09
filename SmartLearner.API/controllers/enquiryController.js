const Enquiry = require("../models/EnquiryModel");
const mailSender = require("../utilities/mailer");
const enquiryForm = async (req, res) => {
  try {
    const response = req.body;
    console.log(response,"dasfhgdsasfsdsfgdsfgfdsf")
    await mailSender("User",response["email"],response)
    await mailSender("Admin",response["email"],response)
    return res.status(200).json({ success:true,message: "Message Send Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Message Not Delivered" });
  }
};

module.exports = enquiryForm;
