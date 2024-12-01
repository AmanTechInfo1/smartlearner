const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");
const Plans = require("../models/planUserModel");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const axios = require("axios");

const nodemailer = require("nodemailer");

class UserSubscriptionService {
  async createUserSubscription(userId, subscriptionId, isTrial = false) {
   

    const plan = await Plans.findById(subscriptionId);
    if (!plan) {
      throw new Error("Plan not found");
    }
    const currentDate = new Date();

    // If the user is eligible for a trial, check for an existing trial
    if (isTrial) {
      const existingTrial = await UserSubscription.findOne({
        userId,
        isTrial: true,
      });

      if (existingTrial) {
        throw new Error("Free Trial Used");
      }
    }

    // Find an existing active subscription
    const existingSubscription = await UserSubscription.findOne({
      userId,
      isActive: true,
      isTrial: false, // Ensure it's not a trial subscription
    });

    let planEndDate;

    if (existingSubscription) {
      // User already has an active subscription, so extend the subscription
      const existingEndDate = existingSubscription.planEndDate;
      planEndDate = new Date(existingEndDate.getTime() + plan.duration * 24 * 60 * 60 * 1000);
      
      // Update the existing subscription's end date and other relevant fields
      existingSubscription.planEndDate = planEndDate;
      existingSubscription.subscriptionId = subscriptionId; // Update subscription plan
      existingSubscription.planStartDate = currentDate; // Update start date

      // Save the updated subscription
      await existingSubscription.save();
      return existingSubscription;
    } else {
      // No existing subscription, create a new one
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
          ? new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
          : null,
        paymentStatus: "COMPLETED",
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
        couponApplied: true,
      });

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
          couponApplied: true, // Mark the coupon as applied
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Coupon applied successfully" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  // ====////////////////////////////////////////////////////////
  async sendSubscriptionEmail(userId, subscriptionId, status) {
   
    const user = await User.findById(userId);
    const subscription = await Plans.findById(subscriptionId);

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com",
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
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('clientapp/src/assets/images/smartlearnerLogo.png');
              }
            }



            .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; }
            .header { text-align: center; margin-bottom: 20px; }
            .header img { width: 150px;}
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
              <p>Your payment for Order #${subscription.planname} has been ${status}.</p>
  
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
                   <th>Plan duration</th>
                    <td> ${subscription.duration} days</td>
                   </tr>
                
               
              
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
      from: "Smartlearnerdrivingschool@gmail.com",
      to: [user.email, "Smartlearnerdrivingschool@gmail.com"],
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
