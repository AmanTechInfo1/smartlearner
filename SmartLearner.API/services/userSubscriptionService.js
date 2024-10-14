const UserSubscription = require('../models/subscriptionModal');
const User = require('../models/userModel');
const Plans = require('../models/planUserModel');

class UserSubscriptionService {
  async createUserSubscription(userId, subscriptionId) {
    const userSubscription = new UserSubscription({ userId, subscriptionId });
    await userSubscription.save();

    // Update user's subscription reference
    await User.findByIdAndUpdate(userId, { subscription: subscriptionId });
    return userSubscription;
  }

  async getUserSubscriptions(userId) {
    return await UserSubscription.find({ userId }).populate('subscriptionId');
  }

  async deleteUserSubscription(userId, subscriptionId) {
    return await UserSubscription.findOneAndDelete({ userId, subscriptionId });
  }

  async getAllUserSubscriptions() {
    return await UserSubscription.find().populate('userId subscriptionId');
  }

  async checkTrialStatus(userId) {
    const userSubscriptions = await this.getUserSubscriptions(userId);
    const currentDate = new Date();

    return userSubscriptions.filter(subscription => {
      const plan = subscription.subscriptionId;
      return plan.isTrial && plan.trialEndDate > currentDate;
    });
  }
}

module.exports = new UserSubscriptionService();
