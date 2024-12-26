const express = require('express');
const { addClientReview, getClientReviews, deleteClientReview, updateClientReview } = require('../Controllers/clientController');

const router = express.Router();

// Route to add a new client review
router.post('/add', addClientReview);

// Route to get all client reviews
router.get('/all', getClientReviews);

// Route to delete a client review by ID
router.delete('/delete/:id', deleteClientReview);

// Route to update a client review by ID
router.put('/update/:id', updateClientReview);

module.exports = router;
