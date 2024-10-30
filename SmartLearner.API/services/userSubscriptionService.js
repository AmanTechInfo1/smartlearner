const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");
const Plans = require("../models/planUserModel");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const axios = require("axios");

class UserSubscriptionService {
  async createUserSubscription(userId, subscriptionId, isTrial = false) {
    const plan = await Plans.findById(subscriptionId);
    const currentDate = new Date();
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
    return await UserSubscription.find({ userId }).populate("subscriptionId");
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
}

module.exports = new UserSubscriptionService();
