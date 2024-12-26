import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Blog/blogdetail.css";
import blogdetail from "../../assets/images/icons/blog1.webp";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const BlogDetail = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to store the blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${blogId}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blogdetail-container">
      <div>
        <img src={`http://localhost:5000${blog.image}`} className="blogdetail-img" alt="blogdetail" />
      </div>

      <div className="blog-meta">
        <div className="social-icons">
          <FaFacebookF size={30} className="social-icon" />
          <FaTwitter size={30} className="social-icon" />
          <FaInstagram size={30} className="social-icon" />
          <FaLinkedinIn size={30} className="social-icon" />
        </div>
        <div className="author-name">
          <span>By {blog.author || "Unknown"}</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>{blog.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
       
      </div>
    </div>
  );
};

export default BlogDetail;
