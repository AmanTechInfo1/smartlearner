const express = require("express");
const router = express.Router();
const SubscriptionController = require("../controllers/subscriptionController");

// Define routes for subscription management
router.post("/add-plan", SubscriptionController.addSubscriptionPlan); // Add new subscription plan
router.get("/plans", SubscriptionController.getAllSubscriptionPlans); // Get all subscription plans
router.post("/add-free-trial", SubscriptionController.addFreeTrialPlan); // Add free trial plan
router.get("/subscribe", SubscriptionController.getFreeTrialPlans); // Get all free trial plans
router.get(
  "/subscriptions/user/:userId",
  SubscriptionController.getSubscriptionsByUser
); // Get subscriptions by user ID
router.post(
  "/subscriptions/user",
  SubscriptionController.createUserSubscription
); // Create a user subscription
router.post("/subscribe", SubscriptionController.startFreeTrial); // Start a free trial subscription

module.exports = router;
