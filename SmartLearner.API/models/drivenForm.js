const { Schema, model } = require("mongoose");

const drivenFormSchema = new Schema({
  drivenBefore: { type: String, required: true },
  preferredType: { type: String, required: true },
  postcode: { type: String, required: true },
});

const DrivenBefore = new model("DrivenBefore", drivenFormSchema);

module.exports = DrivenBefore;
