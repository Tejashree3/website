const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./modal/db'); // Adjust based on your actual file
const blogRoute = require('./routes/blogRoute'); // Blog routes
const serviceRoutes = require('./Routes/servicesRoute'); // Service routes
const clientRoute = require('./Routes/clientRoute'); // Service routes
const featureRoutes = require('./Routes/featureRoute'); // Importing the feature routes
const investmentRoutes=require ("./Routes/investmentRoute")
const contactRoutes=require("./Routes/contactRoute")



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, process.env.UPLOAD_DIR || 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(uploadDir));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 5 } }); // 5MB size limit







connectDB();
app.use('/api/blog', blogRoute);
app.use('/api/services', serviceRoutes);
app.use('/api/client', clientRoute);
app.use('/api/features', featureRoutes);  // Using the feature routes for handling real estate features
app.use('/api/investments', investmentRoutes);
app.use('/api', contactRoutes);



app.post('/api/upload', upload.single('icon'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'File upload failed.' });
  }
  res.status(200).json({ success: true, file: req.file });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  } else if (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});