




import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import axios from "axios";
import "../Gallery/gallery.css";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const [sortOption, setSortOption] = useState("newest");
  const [layoutMode, setLayoutMode] = useState("grid"); // State for layout mode
  const { id } = useParams(); // Get the id from the URL
  const [destination, setDestination] = useState(null);
  const [imagesData, setImagesData] = useState([]); // Store the fetched data

  axios
  .get(`http://localhost:5000/api/investments/list/${id}`) // Use backticks for string interpolation
  .then((response) => {
    setDestination(response.data); // Set the fetched data
  })
  .catch((error) => {
    console.error("Error fetching destination data:", error);
  });



  useEffect(() => {
    // Fetch data for the specific destination based on the id
    axios
      .get(`http://localhost:5000/api/features/list`)
      .then((response) => {
        setImagesData(response.data); // Set the fetched data
      })
      .catch((error) => {
        console.error("Error fetching destination data:", error);
      });
  }, []); // Fetch only once when component mounts

  if (!imagesData.length) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  // Sorting logic
  const sortedImages = [...imagesData].sort((a, b) => {
    if (sortOption === "newest") return b._id.localeCompare(a._id); // Assuming _id is a unique field
    if (sortOption === "lowest")
      return a.price.localeCompare(b.price, undefined, { numeric: true });
    if (sortOption === "highest")
      return b.price.localeCompare(a.price, undefined, { numeric: true });

    return 0;
  });

  return (
    <>
     <section className="slider">
        {/* Carousel start */}
        <Carousel variant="dark">
          <Carousel.Item>
            <img

              src={`http://localhost:5000${destination.image}`}
              className="d-block w-100 gallery-slider-image"
              alt="Destination"
            />

            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">{destination.title}</h5>
                <p className="sub_text">{destination.location}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={`http://localhost:5000${destination.image}`}
              className="d-block w-100 gallery-slider-image"
              alt="Destination"
            />

            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">{destination.title}</h5>
                <p className="sub_text">{destination.location}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img

              src={`http://localhost:5000${destination.image}`}
              className="d-block w-100 gallery-slider-image"
              alt="Destination"
            />

            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">{destination.title}</h5>
                <p className="sub_text">{destination.location}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Gallery Grid */}
      <div className="gallerycard">
        {/* Layout buttons */}
        <div className="layout-toggle d-flex justify-content-between">
          <div>
            <button
              className={`layout-icon ${layoutMode === "grid" ? "active" : ""}`}
              onClick={() => setLayoutMode("grid")}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button
              className={`layout-icon ${layoutMode === "row" ? "active" : ""}`}
              onClick={() => setLayoutMode("row")}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div className="badge">{imagesData.length} Investments</div>
        </div>

        <div className={`gallery-grid ${layoutMode}`}>
          {sortedImages.map((image) => (
            <Card
              key={image._id}
              className={`rounded-2 shadow-sm popular ${
                layoutMode === "row" ? "row-layout" : ""
              }`}
            >
              <div className="image-container">
                <img
                  src={image.images[0]}
                  alt={image.title}
                  className="gallery-image"
                />
              </div>
              <Card.Body className="content-container">
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <span className="badge">{image.tag}</span>
                  </div>
                  <div>
                    <p className="gallery-rating">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`bi ${
                            index < image.rating ? "bi-star-fill" : "bi-star"
                          } me-1`}
                        ></i>
                      ))}
                    </p>
                  </div>
                </div>
                <Card.Title>
                  <h5 className="main-title mb-2">{image.title}</h5>
                </Card.Title>
                <p className="mt-1">
                  <span className="aed">
                    <strong>AED:</strong> {image.price}
                  </span>{" "}
                  |<span className="tag">starting </span>
                </p>
                <div className="d-flex gap-3 mt-1">
                  <span>{image.bed} Bed</span>
                  <span>{image.bath} Bath</span>
                  <span>{image.size}</span>
                </div>
                <p className="mt-1 ">{image.location}</p>
                <ul className="card-tags mt-1">
                  <li>{image.list1}</li>
                  <li>{image.list2}</li>
                  <li>{image.list3}</li>
                </ul>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
