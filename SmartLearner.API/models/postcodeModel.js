const mongoose = require("mongoose");

const postcodeSchema = new mongoose.Schema({
    postcode: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
   
});

const Postcode = mongoose.model('Postcode', postcodeSchema);

module.exports = Postcode;
