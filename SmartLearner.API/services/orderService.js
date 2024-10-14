const { ObjectId } = require("mongodb");
const Order = require("../models/orderModel");

class OrderService {
  async createOrderAsync(data) {
    try {

      let aggr = [
        {
          '$sort': {
            '_id': -1
          }
        }, {
          '$limit': 1
        }
      ]

      const totalOrder = await Order.aggregate(aggr);
      let orderId = ""




      if (totalOrder.length == 0) {
        orderId = "Order-000001"
      } else {

        let ono = +totalOrder[0]["orderNo"].replace("Order-", "") + 1


        orderId = `Order-${(ono).toString().padStart(6, '0')}`

        // const numberString = (1).toString().padStart(loop, '0')

        // orderId=`Order-${(1).toString().padStart(loop, '0')}`

      }

      data["orderNo"] = orderId

      const order = await Order.create(data);
      const totalCount = await Order.countDocuments();

      let valU = {
        seller_id: process.env.SELLER_ID || "99963233",
        seller_key: process.env.SELLER_KEY || "02317830",
        ekashu_failure_url: `${process.env.BACKEND_URL || "http://localhost:5000"}/api/order/paymentFailed`,
        ekashu_success_url: `${process.env.BACKEND_URL || "http://localhost:5000"}/api/order/paymentSuccess`,
        ekashu_return_url: `${process.env.FRONTEND_URL || "http://localhost:3000"}/checkout`,
        ekashu_reference: orderId
      }

      order._doc = {
        ...order._doc,
        ...valU
      }
      const resultObject = {
        message: "Order Created successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create Order");
    }
  }

  async getAllOrderAsync() {
    try {


      let aggr = [
        {
          '$lookup': {
            'from': 'users',
            'localField': 'userId',
            'foreignField': '_id',
            'as': 'user'
          }
        }, {
          '$unwind': {
            'path': '$user',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'products',
            'localField': 'myCart.id',
            'foreignField': '_id',
            'as': 'myCartList'
          }
        }, {
          '$project': {
            'user.password': 0,
            'user._id': 0,
            'user.privacyPolicy': 0,
            'user.isEmailVerified': 0,
            'user.isActive': 0,
            'user.isUpdated': 0,
            'user.isDeleted': 0,
            'user.isBcryptHashed': 0,
            'user.createdOn': 0,
            'user.__v': 0
          }
        }
      ]



      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount }
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
          '$match': {
            'userId': new ObjectId(uid),
            'orderPaymentStatus':"Completed"
          }
        }, {
          '$lookup': {
            'from': 'users',
            'localField': 'userId',
            'foreignField': '_id',
            'as': 'user'
          }
        }, {
          '$unwind': {
            'path': '$user',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$unwind': {
            'path': '$myCart',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'products',
            'localField': 'myCart.id',
            'foreignField': '_id',
            'as': 'myCartList'
          }
        }, {
          '$project': {
            'user.password': 0,
            'user._id': 0,
            'user.privacyPolicy': 0,
            'user.isEmailVerified': 0,
            'user.isActive': 0,
            'user.isUpdated': 0,
            'user.isDeleted': 0,
            'user.isBcryptHashed': 0,
            'user.createdOn': 0,
            'user.__v': 0
          }
        }, {
          '$unwind': {
            'path': '$myCartList',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'myCartList.myCartcount': '$myCart.count',
            'myCartList.myCartprice': '$myCart.price'
          }
        }, {
          '$group': {
            '_id': "$_id",
            'myCartList': {
              '$push': '$myCartList'
            },
            'data': {
              '$first': '$$ROOT'
            }
          }
        }, {
          '$addFields': {
            'data.myCartList': '$myCartList'
          }
        }, {
          '$replaceRoot': {
            'newRoot': '$data'
          }
        }
      ]



      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 200,
        success: true,
        data: { order: order, totalCount }
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
          '$match': {
            '_id': new ObjectId(uid)
          }
        }, {
          '$lookup': {
            'from': 'users',
            'localField': 'userId',
            'foreignField': '_id',
            'as': 'user'
          }
        }, {
          '$unwind': {
            'path': '$user',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$unwind': {
            'path': '$myCart',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'products',
            'localField': 'myCart.id',
            'foreignField': '_id',
            'as': 'myCartList'
          }
        }, {
          '$project': {
            'user.password': 0,
            'user._id': 0,
            'user.privacyPolicy': 0,
            'user.isEmailVerified': 0,
            'user.isActive': 0,
            'user.isUpdated': 0,
            'user.isDeleted': 0,
            'user.isBcryptHashed': 0,
            'user.createdOn': 0,
            'user.__v': 0
          }
        }, {
          '$unwind': {
            'path': '$myCartList',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'myCartList.myCartcount': '$myCart.count',
            'myCartList.myCartprice': '$myCart.price'
          }
        }, {
          '$group': {
            '_id': null,
            'myCartList': {
              '$push': '$myCartList'
            },
            'data': {
              '$first': '$$ROOT'
            }
          }
        }, {
          '$addFields': {
            'data.myCartList': '$myCartList'
          }
        }, {
          '$replaceRoot': {
            'newRoot': '$data'
          }
        }
      ]



      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order: order.length > 0 ? order[0] : {}, totalCount }
      };
      return resultObject;
    } catch (err) {

      throw new Error("Could not fetch role");
    }
  }





  async updateOrderById(uid) {
    try {
      
      const order = await Order.findOneAndUpdate({orderNo:uid},{ $set: { orderPaymentStatus: 'Completed' } });
      
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }



  async getOneOrderNoRespAsync(uid) {
    try {


      let aggr = [
        {
          '$match': {
            '_id': new ObjectId(uid)
          }
        }, {
          '$lookup': {
            'from': 'users',
            'localField': 'userId',
            'foreignField': '_id',
            'as': 'user'
          }
        }, {
          '$unwind': {
            'path': '$user',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$unwind': {
            'path': '$myCart',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'products',
            'localField': 'myCart.id',
            'foreignField': '_id',
            'as': 'myCartList'
          }
        }, {
          '$project': {
            'user.password': 0,
            'user._id': 0,
            'user.privacyPolicy': 0,
            'user.isEmailVerified': 0,
            'user.isActive': 0,
            'user.isUpdated': 0,
            'user.isDeleted': 0,
            'user.isBcryptHashed': 0,
            'user.createdOn': 0,
            'user.__v': 0
          }
        }, {
          '$unwind': {
            'path': '$myCartList',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'myCartList.myCartcount': '$myCart.count',
            'myCartList.myCartprice': '$myCart.price'
          }
        }, {
          '$group': {
            '_id': null,
            'myCartList': {
              '$push': '$myCartList'
            },
            'data': {
              '$first': '$$ROOT'
            }
          }
        }, {
          '$addFields': {
            'data.myCartList': '$myCartList'
          }
        }, {
          '$replaceRoot': {
            'newRoot': '$data'
          }
        }
      ]



      const order = await Order.aggregate(aggr);
      return order[0];
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }




  // async getMyOrderAsync(idd) {
  //   try {


  //     let aggr = [
  //       {
  //         '$match': {
  //           'user': new ObjectId(idd)
  //         }
  //       },
  //       {
  //         '$lookup': {
  //           'from': 'users',
  //           'localField': 'userId',
  //           'foreignField': '_id',
  //           'as': 'user'
  //         }
  //       }, {
  //         '$unwind': {
  //           'path': '$user',
  //           'preserveNullAndEmptyArrays': true
  //         }
  //       }, {
  //         '$lookup': {
  //           'from': 'products',
  //           'localField': 'myCart.id',
  //           'foreignField': '_id',
  //           'as': 'myCartList'
  //         }
  //       }, {
  //         '$project': {
  //           'user.password': 0,
  //           'user._id': 0,
  //           'user.privacyPolicy': 0,
  //           'user.isEmailVerified': 0,
  //           'user.isActive': 0,
  //           'user.isUpdated': 0,
  //           'user.isDeleted': 0,
  //           'user.isBcryptHashed': 0,
  //           'user.createdOn': 0,
  //           'user.__v': 0
  //         }
  //       }
  //     ]



  //     const order = await Order.aggregate(aggr);
  //     const totalCount = await Order.countDocuments();
  //     const resultObject = {
  //       message: "Order Fetch Successfully",
  //       statusCode: 201,
  //       success: true,
  //       data: { order, totalCount }
  //     };
  //     return resultObject;
  //   } catch (err) {

  //     throw new Error("Could not fetch role");
  //   }
  // }
}

module.exports = new OrderService();
