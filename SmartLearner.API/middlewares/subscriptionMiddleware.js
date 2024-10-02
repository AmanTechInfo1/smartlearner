// // middleware/checkSubscription.js
// const User = require("../models/userModel");

// const checkSubscription = async (req, res, next) => {
//   const userId = req.user.id; // Assuming user ID is available in req.user
//   const user = await User.findById(userId).populate("subscriptionType");

//   if (!user.isActive || !user.subscriptionType) {
//     return res
//       .status(403)
//       .json({ message: "Access denied. Please subscribe." });
//   }

//   next();
// };

// module.exports = checkSubscription;
s