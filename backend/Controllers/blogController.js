const Blog = require('../modal/blog');

const createBlog = async (req, res) => {
  const { name, description, date ,tag,author} = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null; // Use relative path

  if (!image) {
    return res.status(400).json({ message: 'Image file is required' });
  }

  try {
    const newBlog = new Blog({
      name,
      description,
      date,
      image,
      tag,
      author,
    });

    // Save the blog to the database
    await newBlog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog: newBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// Update a blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;  // Get the blog ID from the request parameters
  const { name, description, date,tag,author } = req.body;  // Get the updated fields from the request body
  const image = req.file ? `/uploads/${req.file.filename}` : null;  // Use relative image path if provided
  
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        name,
        description,
        date,
        tag,
        author,
        image: image || undefined,  // Only update image if provided
      },
      { new: true }  // Return the updated blog document
    );
    
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({
      message: 'Blog updated successfully',
      blog: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;  // Get the blog ID from the request parameters

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({
      message: 'Blog deleted successfully',
      blog: deletedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
   

const searchBlog = async (req, res) => {
  const { query } = req.query; // Get the search query from request query string
  
  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    // Search blogs by name or description (using regular expressions for partial matching)
    const searchResults = await Blog.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Case-insensitive search on name
        { description: { $regex: query, $options: 'i' } }, // Case-insensitive search on description
      ],
    });

    if (searchResults.length === 0) {
      return res.status(404).json({ message: 'No blogs found matching the search query' });
    }

    res.status(200).json({
      message: 'Blogs found',
      blogs: searchResults,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};




// Get a blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params; // Extract the blog ID from request parameters

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({
      message: 'Blog fetched successfully',
      blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  searchBlog,
  updateBlog,
  deleteBlog,
  getBlogById, // Added the new API here
};