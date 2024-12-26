const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configure multer storage engine for uploading images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Define the directory to save the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  }
});

// Define the file filter to allow only certain image types
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|svg/; // Define allowed image types
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase()); // Check extension
  const mimetype = allowedTypes.test(file.mimetype); // Check mime type

  if (extname && mimetype) {
    return cb(null, true); // Accept the file
  } else {
    cb(new Error('Only image files are allowed!'), false); // Reject the file
  }
};

// Configure multer to handle multiple image uploads (up to 5 images)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }  // Optional: Limit file size to 5MB
}).array('images', 6);  // Accept up to 5 images

const featureController = require('../Controllers/featureController');

// Use multer to handle file upload for the 'images' field (array of images)
router.post('/add', upload, featureController.addFeature);

router.get('/list', featureController.getFeatures);
router.get('/list/:id', featureController.getFeatureById);
router.put('/update/:id', featureController.updateFeature);
router.delete('/delete/:id', featureController.deleteFeature);

module.exports = router;
