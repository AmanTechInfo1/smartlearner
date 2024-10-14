const { ObjectId } = require("mongodb");
const orderService = require("../services/orderService");
const crypto = require('crypto');
const paymentSuccess = require("../models/paymentSuccessModel");


class OrderController {
  async CompleteCheckout(req, res, next) {
    try {

      const data = req.body;
      data["userId"] = req.userId

      let myCart = data["myCart"]

      let mycartPrice = 0
      let myCartIng = myCart.map((itm) => {

        mycartPrice += itm.price * itm.count

        return {
          ...itm,
          id: new ObjectId(itm.id)
        }
      })

      data["myCart"] = myCartIng

      data["mycartPrice"] = mycartPrice
      mycartPrice = mycartPrice + (mycartPrice * 0.02)
      data["mycartPriceTotal"] = mycartPrice
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
      res.redirect(`${process.env.FRONTEND_URL || "http://localhost:3000"}/paymentSuccess`);
      
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


      let SELLER_ID = '99963233'
      let SELLER_KEY = '02317830'
      let HASH_KEY = '0MTsdaVgBDdsB5w2'



      const data = req.body;

      let orderId = data["orderId"]

      const order = await orderService.getOneOrderNoRespAsync(orderId);

      let orderNo = order["orderNo"]
      let total = order["total"]

      delete data["orderId"]

      data["ekashu_seller_id"] = SELLER_ID
      data["ekashu_seller_key"] = SELLER_KEY
      data["ekashu_amount"] = total
      // data["ekashu_amount"]=total


      const check_fields = [
        'ekashu_3d_secure_verify', 'ekashu_amount', 'ekashu_amount_format',
        'ekashu_auto_confirm', 'ekashu_callback_failure_url',
        'ekashu_callback_include_post', 'ekashu_callback_success_url',
        'ekashu_card_address_editable', 'ekashu_card_address_required',
        'ekashu_card_address_verify', 'ekashu_card_email_address_mandatory',
        'ekashu_card_phone_number_mandatory', 'ekashu_card_title_mandatory',
        'ekashu_card_zip_code_verify', 'ekashu_currency',
        'ekashu_delivery_address_editable', 'ekashu_delivery_address_required',
        'ekashu_delivery_email_address_mandatory', 'ekashu_delivery_phone_number_mandatory',
        'ekashu_delivery_title_mandatory', 'ekashu_description', 'ekashu_device',
        'ekashu_duplicate_check', 'ekashu_duplicate_minutes', 'ekashu_failure_return_text',
        'ekashu_failure_url', 'ekashu_hash_code_format', 'ekashu_hash_code_type',
        'ekashu_hash_code_version', 'ekashu_include_post', 'ekashu_invoice_address_editable',
        'ekashu_invoice_address_required', 'ekashu_invoice_email_address_mandatory',
        'ekashu_invoice_phone_number_mandatory', 'ekashu_invoice_title_mandatory',
        'ekashu_locale', 'ekashu_payment_methods', 'ekashu_reference', 'ekashu_request_type',
        'ekashu_return_text', 'ekashu_seller_address', 'ekashu_seller_email_address',
        'ekashu_seller_id', 'ekashu_seller_key', 'ekashu_seller_name', 'ekashu_shortcut_icon',
        'ekashu_style_sheet', 'ekashu_success_url', 'ekashu_title',
        'ekashu_verification_value_mask', 'ekashu_verification_value_verify',
        'ekashu_viewport'
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
