const { nullable } = require("zod");
const Category = require("../models/categoryModel");

class CategoryService {
  async createCategoryAsync(categoryData) {
    try {
      const category = await Category.create({
        ...categoryData,
        createdOn: new Date(),
      });
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
        message: "Category Add Failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }

  async getCategoriesAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = { isDeleted: false };
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }];
      }
      const totalCount = await Category.countDocuments(filter);
      const categories = await Category.find(filter).sort({ createdOn: -1 }).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Categories fetched successfully",
        statusCode: 200,
        success: true,
        data: { categories, totalCount },
      };

      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Could not fetch categories",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async updateCategoryAsync(categoryId, categoryData) {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, {
        name: categoryData.name,
        description: categoryData.description
      }, {
        new: true,
      });
      const resultObject = {
        message: "Category updated successfully",
        statusCode: 200,
        success: true,
        data: { category },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async deleteCategoryAsync(categoryId) {
    try {
      await Category.findByIdAndUpdate(
        categoryId,
        {
          isDeleted: true,
          deletedOn: new Date(),
        });
      const resultObject = {
        message: "Category deleted successfully",
        statusCode: 200,
        success: true,
        data: null,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
}

module.exports = new CategoryService();