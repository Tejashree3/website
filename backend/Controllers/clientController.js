const ClientReview = require('../modal/client'); // Import the model
const { validateClientReview } = require('../middelware/clientvalidation'); // Import validation


const addClientReview = async (req, res) => {
  const { error } = validateClientReview(req.body);
  console.log(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, review, rating } = req.body;

  try {
    const clientReview = new ClientReview({ name, review, rating });
    await clientReview.save();
    res.status(201).json({ message: 'Client review added successfully!', clientReview });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add client review', details: err.message });
  }
};


const getClientReviews = async (req, res) => {
  try {
    const reviews = await ClientReview.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch client reviews', details: err.message });
  }
};


const deleteClientReview = async (req, res) => {
    const { id } = req.params;

    try {
      const clientReview = await ClientReview.findByIdAndDelete(id);
      if (!clientReview) {
        return res.status(404).json({ error: 'Client review not found' });
      }
      res.status(200).json({ message: 'Client review deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete client review', details: err.message });
    }
  };

  const updateClientReview = async (req, res) => {
    const { id } = req.params;
    const { name, review, rating } = req.body;
  
    // Validate the incoming data
    const { error } = validateClientReview(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
  
    try {
      const updatedData = {};
      if (name) updatedData.name = name;
      if (review) updatedData.review = review;
      if (rating) updatedData.rating = rating;
  
      const clientReview = await ClientReview.findByIdAndUpdate(id, updatedData, { new: true });
      if (!clientReview) {
        return res.status(404).json({ error: 'Client review not found' });
      }
      res.status(200).json({ message: 'Client review updated successfully', clientReview });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update client review', details: err.message });
    }
  };
  
  module.exports = { addClientReview, getClientReviews, deleteClientReview, updateClientReview };
