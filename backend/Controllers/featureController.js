const Feature = require('../modal/feature');
const featureValidation = require('../middelware/featureValidation');
const addFeature = async (req, res) => {
  console.log(req.body);  // Check if fields are being sent correctly
  console.log(req.files);  // Check if files are included

  const { error } = featureValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Handle image upload
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('At least one image file is required');
  }

  // Construct image URLs array
  const imageUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

  const newFeature = new Feature({
    title: req.body.title,
    tag: req.body.tag,
    price: req.body.price,
    location: req.body.location,
    size: req.body.size,
    bed: req.body.bed,
    bath: req.body.bath,
    list1: req.body.list1,
    list2: req.body.list2,
    list3: req.body.list3,
    images: imageUrls,  // Store array of image URLs
  });

  try {
    const savedFeature = await newFeature.save();
    res.status(201).send(savedFeature);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).json(features);
  } catch (err) {
    res.status(500).send('Server error');
  }
};




const getFeatureById = async (req, res) => {
  try {
    // Fetch feature using the ID from the URL
    const feature = await Feature.findById(req.params.id);

    // If the feature doesn't exist, return a 404 error
    if (!feature) return res.status(404).send('Feature not found');

    // If feature found, return it as a JSON response
    res.status(200).json(feature);
  } catch (err) {
    // In case of a server error, return a 500 error
    res.status(500).send('Server error');
  }
};


const updateFeature = async (req, res) => {
  const { error } = featureValidation(req.body);
  console.log(req.body);  // Log to check if the 'title' field is included

  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updatedFeature = await Feature.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFeature) return res.status(404).send('Feature not found');
    res.status(200).json(updatedFeature);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const deleteFeature = async (req, res) => {
  try {
    const deletedFeature = await Feature.findByIdAndDelete(req.params.id);
    if (!deletedFeature) return res.status(404).send('Feature not found');
    res.status(200).send('Feature deleted');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = {
  addFeature,
  getFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature
};
