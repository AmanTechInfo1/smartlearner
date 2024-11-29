const { ObjectId } = require("mongodb");
const Order = require("../models/orderModel");

const axios = require("axios");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");

const nodemailer = require("nodemailer");

class OrderService {
  async createOrderAsync(data) {
    try {
      let aggr = [
        {
          $sort: {
            _id: -1,
          },
        },
        {
          $limit: 1,
        },
      ];

      const totalOrder = await Order.aggregate(aggr);
      let orderId = "";

      if (totalOrder.length == 0) {
        orderId = "Order-000001";
      } else {
        let ono = +totalOrder[0]["orderNo"].replace("Order-", "") + 1;

        orderId = `Order-${ono.toString().padStart(6, "0")}`;

        // const numberString = (1).toString().padStart(loop, '0')

        // orderId=`Order-${(1).toString().padStart(loop, '0')}`
      }

      data["orderNo"] = orderId;

      const order = await Order.create(data);
      const totalCount = await Order.countDocuments();

      let valU = {
        ekashu_seller_id: process.env.SELLER_ID || "25071147",
        ekashu_seller_key: process.env.SELLER_KEY || "43443672",
        ekashu_failure_url: `https://api.smartlearner.com/api/order/paymentFailed`,
        ekashu_success_url: `https://api.smartlearner.com/api/order/paymentSuccess`,
        ekashu_return_url: `https://smartlearner.com/checkout`,
        ekashu_reference: orderId,
      };

      order._doc = {
        ...order._doc,
        ...valU,
      };
      const resultObject = {
        message: "Order Created successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount },
      };
      return resultObject;
    } catch (err) {
      console.error("Order Creation Error: ", err);
      throw new Error("Could not create Order");
    }
  }

  async getAllOrderAsync() {
    try {
      let aggr = [
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getMyOrderAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            userId: new ObjectId(uid),
            orderPaymentStatus: "Completed",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: "$_id",
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 200,
        success: true,
        data: { order: order, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneOrderAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            _id: new ObjectId(uid),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: null,
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order: order.length > 0 ? order[0] : {}, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async updateOrderById(uid) {
    try {
      const order = await Order.findOneAndUpdate(
        { orderNo: uid },
        { $set: { orderPaymentStatus: "Completed" } }
      );
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneOrderNoRespAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            _id: new ObjectId(uid),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: null,
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      return order[0];
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }
  // ==================================================================
  async createPaypalPayment(orderData) {
    const accessToken = await getAccessToken();
    console.log("Access Token:", accessToken);
    const paymentData = {
      intent: "CAPTURE",
      payer: { payment_method: "paypal" },
      purchase_units: [
        {
          amount: {
            currency_code: "GBP",
            value: parseFloat(orderData.total).toFixed(2),
          },
          description: "Order payment",
          item_list: {
            items: orderData.myCart.map((item) => ({
              name: item.service,
              price:  parseFloat(item.price).toFixed(2),
              quantity: item.count,
            })),
          },
        },
      ],
      redirect_urls: {
        return_url: "http://api.smartlearner.com/api/order/executePayment",
        cancel_url: "http://api.smartlearner.com/api/order/cancel",
      },
    };

    try {
      const response = await axios.post(
        `${PAYPAL_API_BASE}/v2/checkout/orders`,
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data; // This contains approval_url to redirect user to PayPal for approval
    } catch (error) {
      console.error("Error creating PayPal payment:", error.response.data);
      throw new Error("Payment creation failed");
    }
  }

  async capturePayment(paymentId, payerId) {
    const accessToken = await getAccessToken();

    const captureData = {
      payer_id: payerId,
    };

    try {
      const response = await axios.post(
        `${PAYPAL_API_BASE}/v2/checkout/orders/${paymentId}/capture`,
        captureData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error capturing PayPal payment:", error.response.data);
      throw new Error("Payment capture failed");
    }
  }

  async sendEmail(orderDetails, status) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com", // Your email
        pass: "cbsb ueih dxqm zdhd", // Your email password or app password
      },
    });

    let cartDetails = "";
    orderDetails.myCart.forEach(item => {
        cartDetails += `- Service: ${item.service}, Quantity: ${item.count}, Price: $${item.price.toFixed(2)}\n`;
    });

    const mailOptions = {
      from: "Smartlearnerdrivingschool@gmail.com",
      to: [orderDetails.email, "Smartlearnerdrivingschool@gmail.com"],
      subject: `Payment ${status} - Order #${orderDetails._id}`,
      text: `Hello ${orderDetails.firstName} ${orderDetails.lastName},\n\n
    Your payment for Order #${orderDetails._id} has been ${status}.\n
    Order Details:\n
    First Name: ${orderDetails.firstName}\n
    Last Name: ${orderDetails.lastName}\n
    Email: ${orderDetails.email}\n
   Product Details: ${cartDetails}\n
    Address: ${orderDetails.streetAddress1} ${orderDetails.streetAddress2}\n
    City: ${orderDetails.city}\n
    Total: $${orderDetails.total}\n\n
    Thank you for shopping with us!`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Email sending failed");
    }
  }
}

module.exports = new OrderService();
