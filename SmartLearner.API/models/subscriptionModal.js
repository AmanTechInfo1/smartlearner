const mongoose = require("mongoose");

const userSubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  subscriptionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PlanUser",
    required: true,
  }, // Reference to the PlanUser model
  createdOn: { type: Date, required: true, default: Date.now }, // Optional: to track when the subscription was created
  // New fields for tracking free trial
  isTrialActive: { type: Boolean, default: false },
  trialStart: { type: Date },
  trialDuration: { type: Number }, // Duration in days for the free trial
});

// Method to check if the trial is still valid
userSubscriptionSchema.methods.isTrialValid = function () {
  if (this.isTrialActive && this.trialStart) {
    const currentTime = new Date();
    const endTime = new Date(this.trialStart);
    endTime.setDate(endTime.getDate() + this.trialDuration);
    return currentTime < endTime;
  }
  return false;
};

const UserSubscription = mongoose.model(
  "UserSubscription",
  userSubscriptionSchema
);
module.exports = UserSubscription;
