const express = require('express');
const { addService, getAllServices, getServiceById, updateService, deleteService } = require('../Controllers/servicecontroller');
const multer = require('multer');

const router = express.Router();

// Multer setup for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Naming convention for the image
  },
});
const upload = multer({ storage: storage });

// Service creation route
router.post('/add', upload.single('image'), addService);
router.get('/', getAllServices); // Get all services
router.get('/:id', getServiceById); // Get a single service by ID
router.put('/:id', upload.single('image'), updateService); // Update service by ID
router.delete('/:id', deleteService); // Delete service by ID
module.exports = router;
