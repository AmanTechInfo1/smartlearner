const { Schema, model } = require("mongoose");

const CallBackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});
const CallBack = new model("CallBack", CallBackSchema);
module.exports = CallBack;
