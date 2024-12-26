const { body, validationResult } = require('express-validator');

const validateContact = [
  body('firstName').notEmpty().withMessage('First name is required.'),
  body('lastName').notEmpty().withMessage('Last name is required.'),
  body('country').notEmpty().withMessage('Country/Region is required.'),
  body('contactNumber').isMobilePhone().withMessage('Invalid contact number.'),
  body('email').isEmail().withMessage('Invalid email address.'),
  body('message').notEmpty().withMessage('Message is required.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateContact;
