const Product = require('../models/productModel');
const ProductCategory = require('../models/productCategoryModel');

class ProductService {
  async createProductAsync(productData) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (err) {
      throw new Error("Could not create product");
    }
  }

  async getProductsAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        // Example query: { name: { $regex: 'searchTerm', $options: 'i' } }
        filter.$or = [{ name: { $regex: query, $options: 'i' } }];
      }
      const totalCount = await Product.countDocuments(filter);
      const products = await Product.find(filter).skip(skip).limit(pageSize || 20);
      return { products, totalCount };
    } catch (err) {
      throw new Error("Could not fetch products");
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
