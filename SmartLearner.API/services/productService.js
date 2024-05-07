const Product = require('../models/productModel');
const ProductCategory = require('../models/productCategoryModel');

class ProductService {
  async createProductAsync(productData) {
    try {
      const product = await Product.create(productData);
      const totalCount = await Product.countDocuments();
      const resultObject = {
        message: "Product Added Successfully",
        statusCode: 201,
        success: true,
        data: { product, totalCount }
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Product add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }

  async getProductsAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { price: regex }];
      }
      const totalCount = await Product.countDocuments(filter);
      const products = await Product.find(filter).skip(skip).limit(pageSize || 20);
      const resultObject = {
        message: "Products fetched successfully",
        statusCode: 200,
        success: true,
        data: { products, totalCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Could not fetch products",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getProductByIdAsync(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (err) {
      throw new Error("Could not fetch product");
    }
  }

  async updateProductAsync(productId, productData) {
    try {
      const product = await Product.findByIdAndUpdate(productId, productData, { new: true });
      return product;
    } catch (err) {
      throw new Error("Could not update product");
    }
  }

  async deleteProductAsync(productId) {
    try {
      await Product.findByIdAndDelete(productId);
    } catch (err) {
      throw new Error("Could not delete product");
    }
  }
}

module.exports = new ProductService();
