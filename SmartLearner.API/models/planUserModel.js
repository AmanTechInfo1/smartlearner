const mongoose = require("mongoose");

const planUserSchema = new mongoose.Schema({
  planname: { type: String, required: true, unique: false },
  price: { type: Number, required: true },
  planCategory: { type: String, required: true },
  duration: { type: String, required: true },
  planStartDate: { type: Date, required: true, default: Date.now },
  planEndDate: { type: Date, required: true, default: Date.now },
});

const PlanUser = mongoose.model("PlanUser", planUserSchema);
module.exports = PlanUser;
