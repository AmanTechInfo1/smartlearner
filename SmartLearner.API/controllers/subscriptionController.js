const SubscriptionService = require("../services/subscriptionService");

class SubscriptionController {
  // Add a new subscription plan
  async addFreeTrialPlan(req, res) {
    try {
      const newPlan = new PlanUser({
        planname: "Free Trial",
        price: 0,
        planCategory: "Trial",
        duration: req.body.duration, // Assume duration is passed in the body
        planStartDate: new Date(), // Current date
        planEndDate: new Date(
          Date.now() + req.body.durationDays * 24 * 60 * 60 * 1000
        ), // Duration in days
      });
      await newPlan.save();
      res.status(201).json({
        message: "Free Trial Plan created successfully",
        plan: newPlan,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Get all free trial plans
  async getFreeTrialPlans(req, res) {
    try {
      const freeTrialPlans = await PlanUser.find({ planCategory: "Trial" });
      res.status(200).json({
        message: "Fetched Free Trial Plans successfully",
        plans: freeTrialPlans,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async addSubscriptionPlan(req, res) {
    try {
      const planData = req.body;
      const result = await SubscriptionService.addSubscriptionPlan(planData);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  // Get all subscription plans
  async getAllSubscriptionPlans(req, res) {
    try {
      const result = await SubscriptionService.getAllSubscriptionPlans();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  // Get subscriptions for a specific user
  async getSubscriptionsByUser(req, res) {
    try {
      const userId = req.params.userId;
      const result = await SubscriptionService.getSubscriptionsByUser(userId);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  // Create a new user subscription
  async createUserSubscription(req, res) {
    try {
      const { userId, subscriptionId } = req.body;
      const result = await SubscriptionService.createUserSubscription(
        userId,
        subscriptionId
      );
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async startFreeTrial(req, res) {
    const { userId, subscriptionId } = req.body;

    try {
      const subscription = await SubscriptionService.startFreeTrial(
        userId,
        subscriptionId
      );
      res
        .status(201)
        .json({ message: "Free trial started successfully!", subscription });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new SubscriptionController();
