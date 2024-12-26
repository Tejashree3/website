const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // or Buffer if storing image data directly
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Service', serviceSchema);
