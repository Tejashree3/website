const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  bed: {
    type: String,
    required: true
  },
  bath: {
    type: String,
    required: true
  },
  list1: {
    type: String,
    required: true
  },
  list2: {
    type: String,
    required: true
  },
  list3: {
    type: String,
    required: true
  },
  images: [String]  // Array to store multiple image URLs

});

const Feature = mongoose.model('Feature', featureSchema);
module.exports = Feature;
