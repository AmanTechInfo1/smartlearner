const Category = require("../models/categoryModel");

class CategoryService {
  async createCategoryAsync(categoryData) {
    try {
      const category = await Category.create(categoryData);
      const totalCount = await Category.countDocuments();
      const resultObject = {
        message: "Category added successfully",
        statusCode: 201,
        success: true,
        data: { category, totalCount }
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Category added successfully",
        statusCode: 201,
        success: true,
        data: null
      };
      return resultObject;
    }
  }

  async getCategoriesAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }];
      }
      const totalCount = await Category.countDocuments(filter);
      const categories = await Category.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Categories fetched successfully",
        statusCode: 200,
        success: true,
        data: { categories, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch categories");
    }
  }

  async getCategoryByIdAsync(categoryId) {
    try {
      const category = await Category.findById(categoryId);
      return category;
    } catch (err) {
      throw new Error("Could not fetch category");
    }
  }

  async updateCategoryAsync(categoryId, categoryData) {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, categoryData, {
        new: true,
      });
      return category;
    } catch (err) {
      throw new Error("Could not update category");
    }
  }

  async deleteCategoryAsync(categoryId) {
    try {
      await Category.findByIdAndDelete(categoryId);
    } catch (err) {
      throw new Error("Could not delete category");
    }
  }
}

module.exports = new CategoryService();
