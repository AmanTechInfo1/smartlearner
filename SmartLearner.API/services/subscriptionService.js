const PlanUser = require("../models/planUserModel");
const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");

class SubscriptionService {
  // Add a new subscription plan
  async addSubscriptionPlan(planData) {
    try {
      const newPlan = await PlanUser.create(planData);
      return { message: "Subscription plan added successfully", data: newPlan };
    } catch (err) {
      throw new Error("Failed to add subscription plan: " + err.message);
    }
  }

  // Get all subscription plans
  async getAllSubscriptionPlans() {
    try {
      const plans = await PlanUser.find({});
      return {
        message: "Subscription plans fetched successfully",
        data: plans,
      };
    } catch (err) {
      throw new Error("Failed to fetch subscription plans: " + err.message);
    }
  }

  // Get subscriptions for a specific user
  async getSubscriptionsByUser(userId) {
    try {
      const subscriptions = await UserSubscription.find({ userId }).populate(
        "subscriptionId" // Populate with subscription details
      );
      return {
        message: "User subscriptions fetched successfully",
        data: subscriptions,
      };
    } catch (err) {
      throw new Error("Failed to fetch user subscriptions: " + err.message);
    }
  }

  // Create a new user subscription
  async createUserSubscription(userId, subscriptionId) {
    try {
      const userSubscription = new UserSubscription({
        userId,
        subscriptionId,
      });

      await userSubscription.save();
      return { message: "User subscription created successfully" };
    } catch (err) {
      throw new Error("Failed to create user subscription: " + err.message);
    }
  }

  // // Start a free trial for a user
  // async startFreeTrial(userId, subscriptionId, trialDuration) {
  //   const user = await User.findById(userId);
  //   if (!user) throw new Error("User not found");

  //   // Check if free trial has been used
  //   if (user.isFreeTrialUsed)
  //     throw new Error("Free trial has already been used");

  //   // Create a new user subscription for the trial
  //   const subscription = new UserSubscription({
  //     userId,
  //     subscriptionId, // Store subscription ID
  //     isTrialActive: true,
  //     trialStart: Date.now(),
  //     trialDuration,
  //   });

  //   await subscription.save();

  //   // Update user information
  //   user.isFreeTrialUsed = true;
  //   user.trialStart = Date.now();
  //   user.trialDuration = trialDuration;
  //   user.isTrialActive = true; // This could be redundant; you may choose to track it in UserSubscription instead.
  //   await user.save();

  //   return {
  //     message: "Free trial started successfully",
  //     subscription, // Return the subscription details
  //   };
  // }
}

module.exports = new SubscriptionService();
