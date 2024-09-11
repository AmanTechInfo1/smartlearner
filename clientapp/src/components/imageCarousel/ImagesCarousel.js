import React, { useState } from "react";
import "./ImageCarousel.css";
import Slider from "react-slick";

import image1 from "../../assets/images/carouselImg/Cim1.jpg";
import image2 from "../../assets/images/carouselImg/cimg2.jpg";
import image3 from "../../assets/images/carouselImg/cimg3.jpg";
import image4 from "../../assets/images/carouselImg/cimg4.jpg";
import image5 from "../../assets/images/carouselImg/cimg5.jpg";
import image6 from "../../assets/images/carouselImg/cimg6.jpg";
import image7 from "../../assets/images/carouselImg/cimg7.jpg";
import image8 from "../../assets/images/carouselImg/cimg8.jpg";
import image9 from "../../assets/images/carouselImg/cimg9.jpg";
import image10 from "../../assets/images/carouselImg/cimg10.jpg";
import image11 from "../../assets/images/carouselImg/cimg11.jpg";
import image12 from "../../assets/images/carouselImg/cimg12.jpg";
import image13 from "../../assets/images/carouselImg/cimg13.jpg";
import image14 from "../../assets/images/carouselImg/cimg14.jpg";
import image15 from "../../assets/images/carouselImg/cimg15.jpg";
import image16 from "../../assets/images/carouselImg/cimg16.jpg";
import image17 from "../../assets/images/carouselImg/cimg17.jpg";
import image18 from "../../assets/images/carouselImg/cimg18.jpg";
import image19 from "../../assets/images/carouselImg/cimg19.jpg";
import image20 from "../../assets/images/carouselImg/cimg20.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function ImagesCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div
      className="slider-container"
      style={{ color: "white", maxWidth: "1000px", margin: "0 auto" }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            className={index === slideIndex ? "slide slide-active" : "slide"}
            key={index}
          >
            <img src={img} alt="" style={{border: '1px solid white'}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImagesCarousel;
