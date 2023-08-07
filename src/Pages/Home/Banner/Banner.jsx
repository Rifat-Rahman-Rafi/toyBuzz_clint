// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full" style={{height:"500px"}}>
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://i.ibb.co/Zzj2bLZ/best-burger-restaurants-sydney.jpg"
        className="w-full carousel-img"
        alt="Slide 1"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src="https://i.ibb.co/Zzj2bLZ/best-burger-restaurants-sydney.jpg"
        className="w-full carousel-img"
        alt="Slide 2"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src="https://i.ibb.co/Zzj2bLZ/best-burger-restaurants-sydney.jpg"
        className="w-full carousel-img"
        alt="Slide 3"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;