// backend/config/stripe.js
const stripe = require("stripe")(
  "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"
);
module.exports = stripe;
