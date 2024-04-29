const productService = require('../services/productService');

class ProductController {
  async createProduct(req, res, next) {
    try {
      const product = await productService.createProductAsync(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  }

  async getProducts(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const { products, totalCount } = await productService.getProductsAsync(page, pageSize, search);
      res.json({ products, totalCount });
    } catch (err) {
      next(err);
    }
  }

  async getProductById(req, res, next) {
    try {
      const product = await productService.getProductByIdAsync(req.params.id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const product = await productService.updateProductAsync(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      await productService.deleteProductAsync(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProductController();
