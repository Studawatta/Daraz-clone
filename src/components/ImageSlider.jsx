import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide01 from '../assets/slider/slide01.jpg';
import slide02 from '../assets/slider/slide02.jpg';
import slide03 from '../assets/slider/slide03.jpg';
import slide04 from '../assets/slider/slide04.jpg';
import slide05 from '../assets/slider/slide05.jpg';
import slide06 from '../assets/slider/slide06.jpg';
import slide07 from '../assets/slider/slide07.jpg';
import slide08 from '../assets/slider/slide08.jpg';

const ImageSlider = () => {
  const [counter, setCounter] = useState(0);
  const [imgStyle1, setImgStyle1] = useState('');
  const [imgStyle2, setImgStyle2] = useState('');

  const slideImages = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
    slide08,
  ];
  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: 'ease',
  };

  return (
    <div className=" relative bg-red-500 w-full h-[340px] rounded-lg overflow-hidden ">
      {/* SLIDE IMAGES */}
      <div>
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <img src={slideImage} alt="" />
            </div>
          ))}
        </Slide>
      </div>
      {/* BUTTONS */}
      {/* <div className=" text-3xl text-white">
        <MdOutlineKeyboardArrowLeft className=" bg-black/50 absolute top-1/2 left-0 translate-y-[-50%] h-16" />
        <MdOutlineKeyboardArrowRight
          className=" bg-black/50 absolute top-1/2 right-0 translate-y-[-50%] h-16"
          onClick={slideNext}
        />
      </div> */}
    </div>
  );
};

export default ImageSlider;
