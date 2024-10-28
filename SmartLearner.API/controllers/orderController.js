const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const orderService = require("../services/orderService");
const crypto = require('crypto');
const paymentSuccess = require("../models/paymentSuccessModel");


class OrderController {
  async CompleteCheckout(req, res, next) {
    try {
        const data = req.body;
        data["userId"] = req.userId;

        let myCart = data["myCart"];
        if (!myCart || !Array.isArray(myCart)) {
            return res.status(400).json({ message: "Invalid cart data" });
        }

        let mycartPrice = 0;
        let myCartIng = myCart.map((itm) => {
         
            mycartPrice += itm.price * itm.count;

            return {
                ...itm,
                id: new ObjectId(itm.id)
            };
        });

        data["myCart"] = myCartIng;
        data["mycartPrice"] = mycartPrice;
        mycartPrice += (mycartPrice * 0.02); // Add 2% charge
        data["mycartPriceTotal"] = mycartPrice;

        const role = await orderService.createOrderAsync(data);
        res.status(201).json(role);
    } catch (err) {
        next(err);
    }
}

  async getAllOrder(req, res, next) {
    try {

      const data = req.body;
      const role = await orderService.getAllOrderAsync();
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }
  async getOneOrder(req, res, next) {
    try {

      const role = await orderService.getOneOrderAsync(req.params.id);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }
  async getMyOrder(req, res, next) {
    try {
      const role = await orderService.getMyOrderAsync(req.userId);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }


  
  async paymentSuccess(req, res, next) {
    try {
      const data = req.body;
      let dataa=paymentSuccess.create(data)

      const role = await orderService.updateOrderById(data["ekashu_reference"]);

      const resultObject = {
        message: "Payment successfully",
        statusCode: 200,
        success: true,
        data: {

        }
      };
      res.redirect(`${process.env.FRONTEND_URL || "https://web.smartlearner.com"}/paymentSuccess`);
      
    } catch (err) {
      next(err);
    }
  }


  async paymentFailed(req, res, next) {
    try {
      const data = req.body;
    } catch (err) {
      next(err);
    }
  }
  async generate_hash(req, res, next) {
    try {
      const SELLER_ID = '99963233';
      const SELLER_KEY = '02317830';
      const HASH_KEY = '0MTsdaVgBDdsB5w2';
      const data = req.body;
      const orderId = data["orderId"];
      const order = await orderService.getOneOrderNoRespAsync(orderId);
      const total = order["total"];
  
      // Set necessary fields
      data["ekashu_seller_id"] = SELLER_ID;
      data["ekashu_seller_key"] = SELLER_KEY;
      data["ekashu_amount"] = total;
  
      const check_fields = [
        'ekashu_seller_id', 'ekashu_seller_key', 'ekashu_amount', 'ekashu_currency', 'ekashu_reference'
      ];
      
      const hashcode_input = check_fields.map(field => data[field] || '').join('&');
      const hash = crypto.createHmac('sha256', HASH_KEY).update(hashcode_input).digest('base64');
  
      res.json({ hash_code: hash });
    } catch (err) {
      next(err);
    }
  }
  


  async getMyOrder(req, res, next) {
    try {
      const role = await orderService.getMyOrderAsync(req.userId);
      res.status(200).json(role);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new OrderController();
