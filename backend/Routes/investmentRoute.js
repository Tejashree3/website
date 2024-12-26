const express = require('express');
const router = express.Router();


const { addInvestment, getAllInvestments, updateInvestment, deleteInvestment,getInvestmentById, upload } = require('../Controllers/investementController');

// POST route to add an investment
router.post('/add', upload.single('image'), addInvestment);

// GET route to view all investments
router.get('/list', getAllInvestments);

// PUT route to update an investment by ID
router.put('/update/:id', upload.single('image'), updateInvestment);
router.get('/list/:id', getInvestmentById); // New route

// DELETE route to delete an investment by ID
router.delete('/delete/:id', deleteInvestment);

module.exports = router;

