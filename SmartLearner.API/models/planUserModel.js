const mongoose = require('mongoose');

const planUserSchema = new mongoose.Schema({
  planname: { type: String, required: true, unique: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  planStartDate: { type: Date, required: true, default: Date.now },
});

const PlanUser = mongoose.model("planUser", planUserSchema);
module.exports = PlanUser;