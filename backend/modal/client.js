const mongoose = require('mongoose');

const clientReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // Assuming ratings are from 1 to 5
  },
});

module.exports = mongoose.model('ClientReview', clientReviewSchema);
