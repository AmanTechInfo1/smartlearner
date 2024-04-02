const { Schema, model} = require("mongoose");

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tutionType: {
    type: String,
    required: true,
  },
  instructorType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// COLLECTION//
const Contact = new model('Contact', contactSchema);
module.exports = Contact;
