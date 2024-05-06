const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema({
  service: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  postcode: [{ type: String, required: true }],
  message: { type: String, required: true },
});
const Service = new model("Service", ServiceSchema);
module.exports = Service;
