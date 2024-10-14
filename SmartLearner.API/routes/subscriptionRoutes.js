const express = require("express");
const router = express.Router();
const SubscriptionController = require("../controllers/subscriptionController");
const userSubscriptionController = require ("../controllers/userSubscriptionController")

// Define routes for subscription management
router.post("/add-plan", SubscriptionController.createPlan);
router.get("/plan/:id", SubscriptionController.getPlanById);
router.get("/plans", SubscriptionController.getAllPlan);
router.post("/delete-plan/:id", SubscriptionController.deletePlan);
router.post("create-usersubs", userSubscriptionController.createUserSubscription),
router.get("get-usersubs/:userId", userSubscriptionController.getUserSubscriptions),

module.exports = router;
