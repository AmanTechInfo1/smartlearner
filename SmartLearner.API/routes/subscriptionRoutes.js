const express = require("express");
const router = express.Router();
const SubscriptionController = require("../controllers/subscriptionController");
const userSubscriptionController = require("../controllers/userSubscriptionController");
const UserSubscriptionService = require("../services/userSubscriptionService");
const { requireAuth } = require("../middlewares/authMiddleware");
// Define routes for subscription management
router.post("/add-plan", SubscriptionController.createPlan);
router.get("/plan/:id", SubscriptionController.getPlanById);
router.get("/plans", SubscriptionController.getAllPlan);
router.post("/delete-plan/:id", SubscriptionController.deletePlan);

// User subscription routes
router.post(
  "/create-usersubs",
  userSubscriptionController.createUserSubscription
);
router.get(
  "/get-usersubs/:userId",
  userSubscriptionController.getUserSubscriptions
);

// Payment routes
router.post(
  "/create-payment",
  (req, res, next) => {
    console.log("Request received at /create-payment", req.body);
    next();
  },
  requireAuth,
  userSubscriptionController.createPayment
); // New route for creating a payment
router.post("/confirm-payment", userSubscriptionController.confirmPayment); // New route for confirming payment
router.get("/checkTrial/:userId", userSubscriptionController.checkTrialStatus);
router.post("/apply-coupon", userSubscriptionController.couponAccess);

router.post("/pdiApply-coupon", userSubscriptionController.pdiCouponAccess);
router.post("/pdiPartOneApply-coupon", userSubscriptionController.pdiPartOneCouponAccess);
router.post("/pdiPartTwoApply-coupon", userSubscriptionController.pdiPartTwoCouponAccess);
router.post("/pdiPartThreeApply-coupon", userSubscriptionController.pdiPartThreeCouponAccess);
module.exports = router;
