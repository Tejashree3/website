const multer = require('multer');
const Investment = require('../modal/investment');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for the file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Unique filename
  }
});

const upload = multer({ storage: storage }); // Initialize multer with the storage configuration

// Controller for adding investment
const addInvestment = async (req, res) => {
    try {
      // Log the form data and the uploaded file for debugging
      console.log('Form Data:', req.body); // Log the text fields
      console.log('Uploaded File:', req.file); // Log the uploaded file (if any)
  
      // Extract the fields from req.body (the text fields)
      const { title, tag, price, rating } = req.body;
  
      // Check if file was uploaded and construct the image URL
      let image= null;
      if (req.file) {
        image         = `/uploads/${req.file.filename}`; // Construct image URL if file was uploaded
      }
  
      // Validate the incoming data using investmentValidation
      const { error } = require('../middelware/investmentvalidation').validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message }); // Return validation error
      }
  
      // Create a new investment document
      const newInvestment = new Investment({
        title,
        tag,
        price,
        rating,
        image, // Include imageUrl if the image is uploaded
      });
  
      // Save the investment to the database
      const savedInvestment = await newInvestment.save();
  
      // Send success response with the saved investment data
      res.status(201).json({
        message: 'Investment added successfully',
        data: savedInvestment,
      });
    } catch (err) {
      console.log('Error:', err); // Log any errors
      res.status(500).json({ error: 'Internal Server Error' }); // Return server error
    }
  };
  
 
  const getInvestmentById = async (req, res) => {
    try {
        const investment = await Investment.findById(req.params.id);
        if (!investment) {
            return res.status(404).json({ error: 'Investment not found' });
        }
        res.status(200).json(investment);
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};






// Controller for viewing all investments
const getAllInvestments = async (req, res) => {
    try {
      const investments = await Investment.find();
      res.status(200).json({ data: investments });
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const updateInvestment = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, tag, price, rating } = req.body;
  
      let image = null;
      if (req.file) {
        image = `/uploads/${req.file.filename}`;
      }
  
      const updatedData = { title, tag, price, rating };
      if (image) updatedData.image = image;
  
      const updatedInvestment = await Investment.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!updatedInvestment) return res.status(404).json({ error: 'Investment not found' });
  
      res.status(200).json({ message: 'Investment updated successfully', data: updatedInvestment });
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  






  const deleteInvestment = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Received ID for deletion: ${id}`); // Debug log

        const deletedInvestment = await Investment.findByIdAndDelete(id);
        if (!deletedInvestment) {
            console.error(`No investment found with ID: ${id}`);
            return res.status(404).json({ error: 'Investment not found' });
        }

        res.status(200).json({ message: 'Investment deleted successfully', data: deletedInvestment });
    } catch (err) {
        console.error('Error deleting investment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

  
  // Export controllers and upload middleware
  module.exports = { addInvestment,getInvestmentById, getAllInvestments, updateInvestment, deleteInvestment, upload };
  