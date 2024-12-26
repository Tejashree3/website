const express = require('express');
const router = express.Router();
const { createBlog, updateBlog, deleteBlog ,searchBlog,getBlogById} = require('../Controllers/blogController.js');
const upload = require('../middelware/blogvalidation.js');
const Blog = require('../modal/blog.js');

// POST route for creating a blog
router.post('/create', upload.single('image'), createBlog);

// PUT route for updating a blog (with image upload)
router.put('/update/:id', upload.single('image'), updateBlog);

// DELETE route for deleting a blog
router.delete('/delete/:id', deleteBlog);

// GET route for fetching all blogs
router.get('/', async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);  // Send the result as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});
router.get('/search', searchBlog);  // Add search route

router.get('/:id', getBlogById); // Add route for getting blog by ID




module.exports = router;
