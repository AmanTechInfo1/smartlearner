const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");
const Plans = require("../models/planUserModel");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const axios = require("axios");

class UserSubscriptionService {
  async createUserSubscription(userId, subscriptionId, isTrial = false) {
    const plan = await Plans.findById(subscriptionId);
    const currentDate = new Date();

    if (isTrial) {
      const existingTrial = await UserSubscription.findOne({
        userId,
        isTrial: true,
      });

      if (existingTrial) {
        throw new Error("Free Trial Used");
      }
    }

    const planEndDate = new Date(
      currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
    ); // duration in days

    const userSubscription = new UserSubscription({
      userId,
      subscriptionId,
      isActive: true,
      planStartDate: currentDate,
      planEndDate: planEndDate,
      isTrial: isTrial,
      trialStartDate: isTrial ? currentDate : null,
      trialEndDate: isTrial
        ? new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
        : null,
    });

    await userSubscription.save();
    await User.findByIdAndUpdate(userId, { subscription: subscriptionId });
    return userSubscription;
  }

  async createPayment(subscriptionId) {
    const plan = await Plans.findById(subscriptionId);
    const accessToken = await getAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: parseFloat(plan.price).toFixed(2), // Ensure it's formatted correctly as a string
              // Convert price to string
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }

  async confirmPayment(orderId, userId, subscriptionId) {
    const accessToken = await getAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.status === "COMPLETED") {
      const userSubscription = await this.createUserSubscription(
        userId,
        subscriptionId
      );
      return { userSubscription, paymentStatus: "COMPLETED" };
    } else {
      throw new Error("Payment was not completed");
    }
  }

  async getUserSubscriptions(userId) {
    console.log("Querying subscriptions for userId:", userId);
    const subscriptions = await UserSubscription.find({ userId }).populate("subscriptionId");
    console.log("Fetched subscriptions:", subscriptions);
    return subscriptions;
  }

  async deleteUserSubscription(userId, subscriptionId) {
    return await UserSubscription.findOneAndDelete({ userId, subscriptionId });
  }

  async getAllUserSubscriptions() {
    return await UserSubscription.find().populate("userId subscriptionId");
  }

  async checkTrialStatus(userId) {
    const userSubscriptions = await this.getUserSubscriptions(userId);
    const currentDate = new Date();

    return userSubscriptions.filter((subscription) => {
      const plan = subscription.subscriptionId;
      return plan.isTrial && plan.trialEndDate > currentDate;
    });
  }

  // //////////////////////////////coupon code ///////////////////////////
  async applyCouponCode(userId, couponCode) {
    const validCoupon = 'SMARTTHEORY'; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({ userId, couponApplied: true });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get all available plans
      const plans = await Plans.find(); // Retrieve all plans

      // If no plans exist, throw an error
      if (plans.length === 0) {
        throw new Error("No available plans.");
      }

      const currentDate = new Date();
      
      // Loop through all plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: 'COMPLETED', // No payment required, because it's free
          couponApplied: true,  // Mark the coupon as applied
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, { subscription: subscriptions[0].subscriptionId }); // Update user with first subscription

      return { message: "Coupon applied successfully" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }
}

module.exports = new UserSubscriptionService();
