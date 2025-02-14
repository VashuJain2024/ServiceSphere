import React, { useState, useEffect } from "react";
import "./Slider.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import DownArrow from "./DownArrow";

const images = [image1, image2, image3];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="slider">
      <img src={images[currentImage]} alt="Slider" /> 
      <button className="prev" onClick={goToPrevImage}>
        ‹
      </button>
      <button className="next" onClick={goToNextImage}>
        ›
      </button>
 
      <div className="dots">
        <DownArrow />
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
