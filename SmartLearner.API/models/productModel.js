const { required } = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    duration: { type: String, required: true },
    experience: { type: String, required: true },
    transmission: { type: String, required: true },
    postcode: [{ type: String, required: true }],
    areaIncluded: [{ type: String, required: true }],
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    createdOn: { type: Date, required: true },
    isUpdated: { type: Boolean, required: true, default: false },
    modifiedOn: { type: Date },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedOn: { type: Date },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;