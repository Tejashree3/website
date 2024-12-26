import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/gallery/g1.jpg";
import img2 from "../../assets/images/gallery/g2.jpg";
import img3 from "../../assets/images/icons/blog1.webp";
import img4 from "../../assets/images/gallery/g3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../featuredslider/featureslider.css"

function Featureslider() {
  const settings = {
    customPaging: function (i) {
      const thumbnails = [img1, img2, img3, img4];
      return (
        <a key={i}>
          <img src={thumbnails[i]} alt={`Thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    navigator:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className=".image-container">
          <img src={img1} alt="Slide 1" />
        </div>
        <div className=".image-container">
          <img src={img2} alt="Slide 2" />
        </div>
        <div className=".image-container">
          <img src={img3} alt="Slide 3" />
        </div>
        <div className=".image-container">
          <img src={img4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Featureslider;
