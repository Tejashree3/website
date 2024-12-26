const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String, // URL or file path to the image
    required: true,
  },
  author: {
    type: String,  // You can also use ObjectId if you want to reference a user model
    required: true,
  },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
