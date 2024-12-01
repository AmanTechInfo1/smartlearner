const express = require("express");
const router = express.Router();
const userSubscriptionService = require("../services/userSubscriptionService");
const UserSubscription = require("../models/subscriptionModal");

class userSubscriptionController {
  // Add a new subscription plan
  async createUserSubscription(req, res, next) {
    const { userId, subscriptionId, isTrial } = req.body;
    try {
     
      const userSubscription =
        await userSubscriptionService.createUserSubscription(
          userId,
          subscriptionId,
          isTrial
        );
      
       let status = 'success';
        await userSubscriptionService.sendSubscriptionEmail(userId, subscriptionId, status );
      res.status(201).json({
        message: "Subscription created successfully",
        userSubscription,
      });
    } catch (err) {
     
      let status = 'failure';
        await userSubscriptionService.sendSubscriptionEmail(userId, subscriptionId, status );
      next(err);
    }
  }
  async getUserSubscriptions(req, res, next) {
    try {
      const subscriptions = await userSubscriptionService.getUserSubscriptions(
        req.params.userId
      );
      res.status(200).json(subscriptions);
    } catch (err) {
      next(err);
    }
  }
  async deleteUserSubscription(req, res, next) {
    try {
      const { userId, subscriptionId } = req.body;
      const deletSubscription =
        await userSubscriptionService.deleteUserSubscription(
          userId,
          subscriptionId
        );
      res.json(deletSubscription);
    } catch (err) {
      next(err);
    }
  }
  async getAllUserSubscription(req, res, next) {
    try {
      const userSubscriptions =
        await userSubscriptionService.getAllUserSubscriptions();
      res.status(200).json(userSubscriptions);
    } catch (err) {
      next(err);
    }
  }
  async checkTrialStatus(req, res,next) {
    try {
        const trials = await userSubscriptionService.checkTrialStatus(req.params.userId);
        res.status(200).json(trials);
    } catch (err) {
      next(err);
    }
  }

  async createPayment(req, res) {
    const { subscriptionId } = req.body;
    try {
      const order = await userSubscriptionService.createPayment(subscriptionId);
      res.status(200).json({
        id: order.id,
        approvalUrl: order.links.find((link) => link.rel === "approve").href,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }  

  // Confirm payment method
  async confirmPayment(req, res) {
    const { orderId, userId, subscriptionId,isTrial } = req.body;
    try {

     
      const  userSubscription  = await userSubscriptionService.confirmPayment(
        orderId,
        userId,
        subscriptionId,
        isTrial
      );
     
      await userSubscriptionService.sendSubscriptionEmail(userSubscription, 'success');
      
      res.status(200).json(userSubscription);
    } catch (error) {
      res.status(500).json({ error: error.message });
      await userSubscriptionService.sendSubscriptionEmail({ userId, subscriptionId }, 'failure');
    }
  }
  // ////////////////COUPON CODE///////////////////////
  async couponAccess(req, res,next) {
    const { userId, couponCode } = req.body;
    try {
        const couponAccess = await userSubscriptionService.applyCouponCode(userId, couponCode);
        res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new userSubscriptionController();
