import React, { useState, useEffect } from 'react';
import './Carousel.scss';

//Carousel component to display the pictures of the accommodation
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  //Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    //Clean up function once the component is unmounted or re-rendered
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  //Carousel web element
  return (
    <div className="carousel">
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <div className="carousel__item" key={index}>
            <img src={picture} alt="Carousel" className="carousel__image" />
          </div>
        ))}
      </div>

      {/* Prevent display of arrows if only 1 picture in carousel */}
      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide} className="carousel__button carousel__button--prev">&#x2039;</button>
          <button onClick={nextSlide} className="carousel__button carousel__button--next">&#x203a;</button>
          <div className="carousel__counter">{currentIndex + 1} / {pictures.length}</div>
        </>
      )}
    </div>
  );
}

export default Carousel;
