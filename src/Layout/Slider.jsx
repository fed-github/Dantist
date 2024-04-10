import React from 'react';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  './icons/1.jpg',
  './icons/2.jpg',
  './icons/3.jpg',
];

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt="не работает" />
        </div>
      ))}
    </Slider>
  );
};

export default MyCarousel;
