import React, { useState } from "react";
import mod from "../lib/mod";

import "./ImageCarousel.css";

const ImageCarouselNav = ({ onClickPrevious, onClickNext }) => (
  <nav className="image-carousel-nav">
    <button className="image-carousel-nav__prev" onClick={onClickPrevious}>
      <i
        className="fas fa-chevron-left"
        role="img"
        aria-label="previous-item"
      />
    </button>
    <button onClick={onClickNext} className="image=carousel-nav__next">
      <i className="fas fa-chevron-right" role="img" aria-label="next-item" />
    </button>
  </nav>
);

const ImageCarousel = ({ images, nav = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setToPrevious = () => {
    const prevIndex = mod(currentIndex - 1, images.length);
    setCurrentIndex(prevIndex);
  };
  const setToNext = () => {
    const nextIndex = mod(currentIndex + 1, images.length);
    setCurrentIndex(nextIndex);
  };
  return (
    <div className="image-carousel">
      {images.map((img, i) => (
        <img
          key={img}
          src={`img/holiday/${img}`}
          className={currentIndex === i ? "is-active" : ""}
          alt={img}
        />
      ))}
      {nav && (
        <ImageCarouselNav
          onClickPrevious={setToPrevious}
          onClickNext={setToNext}
        />
      )}
    </div>
  );
};

export default ImageCarousel;
