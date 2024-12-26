const Service = require('../modal/services');
const { validateService } = require('../middelware/servicevalidation');

// Function to handle adding a service

const addService = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.path : null; // Get the image path if uploaded

  // Validate title, description, and image fields
  const { error } = validateService({ title, description, image });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    // Create the new service in the database
    const newService = new Service({ title, description, image });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (err) {
    res.status(500).json({ message: 'Error adding service', error: err.message });
  }
};


const getAllServices = async (req, res) => {
  try {
    const services = await Service.find(); // Fetch all services
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching services', error: err.message });
  }
};

const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findById(id); // Fetch service by ID
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching service', error: err.message });
  }
};
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting service', error: err.message });
  }
};
const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const updatedData = { title, description };
    if (image) updatedData.image = image;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service updated successfully', service: updatedService });
  } catch (err) {
    res.status(500).json({ message: 'Error updating service', error: err.message });
  }
};

module.exports = { 
  addService, 
  getAllServices, 
  getServiceById, 
  updateService, 
  deleteService 
};
