import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/Blog/blog.css";
import blog from "../../assets/images/icons/blog1.webp";
import { Link } from "react-router-dom";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import "../banner-1/banner1.css";
import { FaRegClock, FaRegFileAlt } from "react-icons/fa"; // Importing React icons
import ClientReviewSlider from "../client/Clientslider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../Cards/Cards";
import "../.././pages/Home/home.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const [destinationsData, setDestinationsData] = useState([]);


  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog");

        console.log(response);
        const data = response.data;
        if (Array.isArray(data)) {
          setBlogPosts(data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleBlogClick = async (blogId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/blog/${blogId}`);
      console.log(response.data.blog); // Logs the blog data to the console
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const truncateText = (text = "", limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="slider">
        <Carousel variant="dark" indicators={false} controls={false}>
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <p>REAL ESTATE</p>
                <h5 className="heading">
                  Find Your Perfect Home in Dubai with
                </h5>
                <p className="sub_text">
                  Your trusted partner in Dubai’s dynamic real estate market.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="latest-blog-posts">
        <div className="header">
          <button> All Blog Posts</button>
        </div>
        <div className="main-content">
          <div className="featured-blogs">
            {blogPosts.slice(0, 2).map((blog) => (
              <div key={blog._id} className="blog-card featured">
                <Link to={`/blog-detail/${blog._id}`} onClick={() => handleBlogClick(blog._id)}>
                  <img
                    src={`http://localhost:5000${blog.image}`}
                    alt={blog.name}
                  />
                </Link>

                <div className="blog-info ">
                  <div className="d-flex justify-content-between">
                    {/* Clock Icon Before Date */}
                    <div className="date-info">
                      <FaRegClock className="clock-icon" />
                      <p className="date-category">
                        {new Date(blog.date).toLocaleDateString()}
                      </p>
                    </div>

                    {/* Blog Icon Before Tag */}
                    <div className="tag-info">
                      <p
                        className="badge"
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <FaRegFileAlt className="blog-icon" />
                        {blog.tag || "Uncategorized"}
                      </p>
                    </div>
                  </div>
                  <h3>{blog.name}</h3>
                  <p className="blog-desc" dangerouslySetInnerHTML={{ __html: truncateText(blog.description, 100) }} />



                  <p className="blog-desc">
                    {truncateText(blog.author, 100)}
                  </p>


                </div>
              </div>
            ))}
          </div>
          <div className="side-blogs">
            {blogPosts.slice(2).map((blog) => (
              <div key={blog._id} className="blog-card">
                <div>
                  <Link to={`/blog-detail/${blog._id}`} onClick={() => handleBlogClick(blog._id)}>
                    <img
                      src={`http://localhost:5000${blog.image}`}
                      className="blog-right-img"
                      alt={blog.name}
                    />
                  </Link>
                </div>
                <div>
                  <div className="date-info">
                    <p className="date-category">
                      <FaRegClock className="clock-icon" />
                      {new Date(blog.date).toLocaleDateString()} | {blog.tag}
                    </p>
                  </div>
                  <h4>{blog.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
