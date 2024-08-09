import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './DemoCarousel.css'; 

const images = [
  {image:'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text:"best hospital ever"}
  ,{image:'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text:"i love u ..."}
  ,{image:'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',text:"pls love me "}
];

const settings = {
  showArrows: true,
  interval: 3500,
  dynamicHeight: false,
  stopOnHover: true,
  infiniteLoop: true,
  showStatus: false,
  transitionTime: 200,
  showThumbs: false,
  showIndicators: true,
  swipeable: true,
  emulateTouch: true,
  autoPlay: true,
};

const DemoCarousel = () => (
  <div className="carousel-container">
    <Carousel {...settings}>
      {images.map((img, i) => (
        <div key={i} className="slide flex items-center justify-center">
          <img src={img.image} className='max-h-[100vh] object-cover' alt={`Slide ${i + 1}`} />
             <div className="text-overlay w-full h-fit font-semibold">{img.text}</div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default DemoCarousel;
