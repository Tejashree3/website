import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios"; // Import axios
import "../client/client.css";

// slider setting
const ClientReviewSlider = () => {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/client/all");
        setReviews(response.data); // Set the reviews from the API
      } catch (err) {
        setError("Failed to load reviews"); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For devices with width <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992, // For devices with width <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For devices with width <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For devices with width <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error state if fetching fails
  }

  return (
    <>
      {/* slider start */}
      <div className="main-slider">
        {/* first column start */}
        <div className="column-first">
          <h1 className="first-text">
            What Our
            <br />
            <span className="first-span-text">Client</span>
            <br />
            Say's
          </h1>
        </div>
        {/* first column end */}

        {/* slider column start */}
        <div className="client-review-slider-container">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review._id} className="review-slide">
                <div className="review-content">
                  <h3 className="client-name">{review.name}</h3>
                  <p className="review-text">"{review.review}"</p>
                  <div className="client-rating">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={index} className="rating-star">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* slider column end */}
      </div>
    </>
  );
};

export default ClientReviewSlider;
