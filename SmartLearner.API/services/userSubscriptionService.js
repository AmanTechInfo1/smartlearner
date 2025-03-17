const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");
const Plans = require("../models/planUserModel");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const axios = require("axios");
const moment = require("moment");

const nodemailer = require("nodemailer");

class UserSubscriptionService {
  async createUserSubscription(userId, subscriptionId, isTrial = false) {
    const plan = await Plans.findById(subscriptionId);
    const currentDate = new Date();

    // Check if user is trying to use a trial
    if (isTrial) {
      const existingTrial = await UserSubscription.findOne({
        userId,
        isTrial: true,
      });

      if (existingTrial) {
        throw new Error("Free Trial Used");
      }
    }

    // Try to find an active subscription
    const existingSubscription = await UserSubscription.findOne({
      userId,
      isActive: true,
      isTrial: false, // Make sure it's not a trial subscription
    });

    let planEndDate;

    if (existingSubscription) {
      // If user already has an active subscription, extend the current subscription
      const existingEndDate = existingSubscription.planEndDate;
      planEndDate = new Date(
        existingEndDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
      ); // Extend the end date

      // Update the subscription with the new plan end date
      existingSubscription.planEndDate = planEndDate;
      existingSubscription.subscriptionId = subscriptionId; // Update to new plan if needed
      existingSubscription.planStartDate = currentDate; // Update the start date

      // Save the updated subscription
      await existingSubscription.save();
      return existingSubscription;
    } else {
      // If no existing subscription, create a new one
      planEndDate = new Date(
        currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
      );

      const userSubscription = new UserSubscription({
        userId,
        subscriptionId,
        isActive: true,
        planStartDate: currentDate,
        planEndDate: planEndDate,
        isTrial: isTrial,
        trialStartDate: isTrial ? currentDate : null,
        trialEndDate: isTrial
          ? new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) // Assuming trial duration is 7 days
          : null,
      });

      await userSubscription.save();
      await User.findByIdAndUpdate(userId, { subscription: subscriptionId });
      return userSubscription;
    }
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
              currency_code: "GBP",
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
        subscriptionId,
        (isTrial = false)
      );
      await this.sendSubscriptionEmail(subscriptionId, userId, "success");
      return { userSubscription, paymentStatus: "COMPLETED" };
    } else {
      throw new Error("Payment was not completed");
    }
  }

  async getUserSubscriptions(userId) {
    const subscriptions = await UserSubscription.find({ userId }).populate(
      "subscriptionId"
    );

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
    const validCoupon = "FREETHEORY"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        theoryCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: {
          $in: [
            "Lifetime Theory Portal Access £30.00",
          ],
        },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED", // No payment required, because it's free
          theoryCouponApplied: true,
          pdiCouponApplied: null, // Mark the coupon as applied
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "FreetTheory Coupon applied successfully" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  // //////////////////////////////////////////////////////////////
  async pdiCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTOR"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Complete Package"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: true,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi Coupon applied successfully" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  async pdiPartOneCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTONE"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part One"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: true,
          pdiPartTwoCouponApplied: null,
          pdiPartThreeCouponApplied: null,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartOne Coupon applied" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  async pdiPartTwoCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTTWO"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part Two"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: null,
          pdiPartTwoCouponApplied: true,
          pdiPartThreeCouponApplied: null,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartTwo Coupon applied" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }
  async pdiPartThreeCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTTHREE"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part Three"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: null,
          pdiPartTwoCouponApplied: null,
          pdiPartThreeCouponApplied: true,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartThree Coupon applied" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  /////////////////////////////////////////////////////////////////////
  async deactivateExpiredSubscriptions() {
    const currentDate = new Date();
    const expiredSubscriptions = await UserSubscription.find({
      couponApplied: true,
      couponEndDate: { $lt: currentDate }, // Expired coupon
      isActive: true,
    });

    if (expiredSubscriptions.length === 0) {
      console.log("No expired subscriptions found.");
      return;
    }

    for (const subscription of expiredSubscriptions) {
      // Deactivate subscription
      subscription.isActive = false;
      subscription.paymentStatus = "EXPIRED";
      await subscription.save();

      // Optionally remove from user's subscription list
      await User.findByIdAndUpdate(subscription.userId, {
        $pull: { subscription: subscription._id },
      });

      console.log(
        `Subscription for user ${subscription.userId} has expired and been removed.`
      );
    }
  }

  // ==================================================================
  // ====////////////////////////////////////////////////////////
  async sendSubscriptionEmail(userId, subscriptionId, status) {
    const user = await User.findById(userId);
    const subscription = await Plans.findById(subscriptionId);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com", // Your email
        pass: "cbsb ueih dxqm zdhd",
      },
    });

    const htmlContent = ` 
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }



            .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; }
            .header { text-align: center; margin-bottom: 20px; }
            .header img { width: 150px; background-color: black;}
            .body { padding: 20px; }
            .body h2 { color: #444; margin-bottom: 20px; }
            .body p { margin: 10px 0; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
            .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #777; }
            .footer a { color: #0073e6; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
            </div>
            <div class="body">
              <h2>Subscription ${status} - Plan: ${subscription.planname}</h2>
              <p><strong>Dear ${user.username},</strong></p>
              <p>Your payment for Order #${
                subscription.planname
              } has been ${status}.</p>
  
              <h3>Order Details:</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <td>${user.username}</td>
                </tr>
               
                <tr>
                  <th>Email</th>
                  <td>${user.email}</td>
                </tr>
               
               
                </table>
  
              <h3>Subscription Details:</h3>
              <table>
                <tr>
                  <th>Plan Name</th>
                    <td>${subscription.planname}</td>
                   </tr>

                   <tr>
                   <th>Plan Price</th>
                    <td>£ ${subscription.price.toFixed(2)}</td>
                   </tr>

                    <tr>
                   
                
               
              
              </table>
  
              <p>Thank you for choosing Smart Learner Driving School! We look forward to serving you again soon.</p>
            </div>
            <div class="footer">
              <p>If you have any questions, feel free to <a href="mailto:admin@smartlearner.com">contact us</a>.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: "admin@smartlearner.com",
      to: [user.email, "admin@smartlearner.com"],
      subject: `Subscription ${status} - Plan: ${subscription.planname}`,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Email sending failed");
    }
  }
}

module.exports = new UserSubscriptionService();
