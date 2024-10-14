const express = require('express');
const router = express.Router();
const userSubscriptionService = require('../services/userSubscriptionService');


class userSubscriptionController {
    // Add a new subscription plan
    async createUserSubscription(req, res) {
      try {
        const { userId, subscriptionId } = req.body;
  const userSubscription = await userSubscriptionService.createUserSubscription(userId, subscriptionId);
  res.status(201).json(userSubscription);
      } catch (err) {
        next(err);
      }
    }
    async getUserSubscriptions(req, res) {
        try {
            const subscriptions = await userSubscriptionService.getUserSubscriptions(req.params.userId);
            res.status(200).json(subscriptions);
        } catch (err) {
          next(err);
        }
      }
      async deleteUserSubscription(req, res) {
        try {
            const { userId, subscriptionId } = req.body;
            const deletSubscription =   await userSubscriptionService.deleteUserSubscription(userId, subscriptionId);
            res.json(deletSubscription);
        } catch (err) {
          next(err);
        }
      }
      async getAllUserSubscription(req, res) {
        try {
            const userSubscriptions = await userSubscriptionService.getAllUserSubscriptions();
  res.status(200).json(userSubscriptions);
        } catch (err) {
          next(err);
        }
      }
      async checkTrialStatus(req, res) {
        try {
            const trials = await userSubscriptionService.checkTrialStatus(req.params.userId);
            res.status(200).json(trials);
        } catch (err) {
          next(err);
        }
      }
}

module.exports = new userSubscriptionController();