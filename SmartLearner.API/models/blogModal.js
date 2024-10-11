const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  blogName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  shortContent: {
    type: String,
    required: true,
    trim: true,
    maxLength: 150,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs;
