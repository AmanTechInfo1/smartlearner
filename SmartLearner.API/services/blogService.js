const Blogs = require("../models/blogModal");

class BlogService {
  // Create a new blog
  async createBlogAsync(blogData) {
    try {
      const blog = await Blogs.create(blogData);
      const totalCount = await Blogs.countDocuments();
      const resultObject = {
        message: "Blog added successfully",
        statusCode: 201,
        success: true,
        data: { blog, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create blog");
    }
  }

  // Get paginated blogs with optional search query
  async getBlogsAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [
          { Blogname: regex },
          { description: regex },
          { content: regex },
        ];
      }
      const totalCount = await Blogs.countDocuments(filter);
      const blogs = await Blogs.find(filter)
        .skip(skip)
        .limit(pageSize || 20);

      const resultObject = {
        message: "Blogs fetched successfully",
        statusCode: 201,
        success: true,
        data: { blogs, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch blogs");
    }
  }

  // Get a list of all blogs
  async getBlogListAsync() {
    try {
      const blogs = await Blogs.find();
      const resultObject = {
        success: true,
        message: "All blogs fetched successfully",
        data: blogs,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }

  // Get a blog by its ID
  async getBlogByIdAsync(blogId) {
    try {
      const blog = await Blogs.findById(blogId);
      const resultObject = {
        success: true,
        message: "Blog fetched successfully",
        data: blog,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }

  // Update a blog by its ID
  async updateBlogAsync(blogId, blogData) {
    try {
      const blog = await Blogs.findByIdAndUpdate(blogId, blogData, {
        new: true,
      });
      const resultObject = {
        message: "Blog updated successfully",
        statusCode: 201,
        success: true,
        data: { blog },
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

  // Delete a blog by its ID
  async deleteBlogAsync(blogId) {
    try {
      await Blogs.findByIdAndDelete(blogId);
      const resultObject = {
        message: "Blog deleted successfully",
        statusCode: 201,
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

module.exports = new BlogService();
