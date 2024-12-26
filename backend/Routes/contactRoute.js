const express = require('express');
const router = express.Router();
const { createContact } = require('../Controllers/contactController');
const validateContact = require('../middelware/contactvalidation');

router.post('/contact', validateContact, createContact);

module.exports = router;
