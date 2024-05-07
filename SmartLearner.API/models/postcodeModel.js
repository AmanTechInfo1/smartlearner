const mongoose = require("mongoose");

const postcodeSchema = new mongoose.Schema({
    postcode: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    createdOn: { type: Date, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedOn: { type: Date },
});

const Postcode = mongoose.model('Postcode', postcodeSchema);

module.exports = Postcode;
