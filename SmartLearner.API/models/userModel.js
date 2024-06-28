const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  privacyPolicy: { type: Boolean, require: true, default: false },
  createdOn: { type: Date, required: true, default: Date.now },
  isEmailVerified: { type: Boolean, required: true, default: false },
  isActive: { type: Boolean, required: true, default: false },
  activatedOn: { type: Boolean },
  isUpdated: { type: Boolean, required: true, default: false },
  modifiedOn: { type: Date },
  isDeleted: { type: Boolean, required: true, default: false },
  isSubscription: { type: Boolean, required: true, default: false },
  isFreeTrialUsed: { type: Boolean, required: true, default: false },
  subscriptionType: { type: String, default: "" },
  deletedOn: { type: Date },
  isBcryptHashed: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;