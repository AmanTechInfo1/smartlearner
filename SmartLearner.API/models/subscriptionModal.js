const mongoose = require("mongoose");

const userSubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: "Plans" },
  isActive: { type: Boolean, required: true, default: false },
  planStartDate: { type: Date, required: true, default: Date.now },
  planEndDate: { type: Date, required: true, default: Date.now },
  isTrial: { type: Boolean, default: false },
  trialStartDate: { type: Date, default: Date.now },
  trialEndDate: { type: Date },
  paymentStatus: { type: String, default: "PENDING" },
  theoryCouponApplied: { type: Boolean, default: false },
  pdiCouponApplied: { type: Boolean, default: false },
  couponEndDate: { type: String },
});

const UserSubscription = mongoose.model(
  "UserSubscription",
  userSubscriptionSchema
);
module.exports = UserSubscription;
