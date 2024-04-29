const categoryService = require('../services/categoryService');

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const { name, description } = req.body;
      const category = await categoryService.createCategoryAsync({ name, description });
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }

  async getCategories(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const categories = await categoryService.getCategoriesAsync(page, pagesize, search);
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getCategoryById(req, res, next) {
    try {
      const category = await categoryService.getCategoryByIdAsync(req.params.id);
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const category = await categoryService.updateCategoryAsync(req.params.id, req.body);
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      await categoryService.deleteCategoryAsync(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CategoryController();
