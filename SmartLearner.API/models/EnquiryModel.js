const { Schema, model } = require("mongoose");

const EnquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});
const Enquiry = new model("Enquiry", EnquirySchema);
module.exports = Enquiry;
