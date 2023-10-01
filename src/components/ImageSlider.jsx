import React, { useEffect, useRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import {
  slide01,
  slide02,
  slide03,
  slide04,
  slide05,
  slide06,
  slide07,
  slide08,
} from '../assets';

const ImageSlider = () => {
  const [counter, setCounter] = useState(0);

  const img01Ref = useRef();
  const img02Ref = useRef();
  const img03Ref = useRef();
  const img04Ref = useRef();
  const img05Ref = useRef();
  const img06Ref = useRef();
  const img07Ref = useRef();
  const img08Ref = useRef();

  const sliderImages = [
    img01Ref,
    img02Ref,
    img03Ref,
    img04Ref,
    img05Ref,
    img06Ref,
    img07Ref,
    img08Ref,
  ];

  const slideImageStyle = 'absolute w-full h-full left-[100%]';
  const slideButtonStyle =
    ' absolute text-4xl text-white bg-black/30 h-16 cursor-pointer translate-y-1/2 bottom-1/2';

  const slideNext = () => {
    if (counter < sliderImages.length - 1) {
      sliderImages[counter].current.style.animation =
        'next01 1s ease-in forwards';
      sliderImages[counter + 1].current.style.animation =
        'next02 1s ease-in forwards';
      setCounter(counter + 1);
    } else {
      sliderImages[0].current.style.animation = 'next02 1s ease-in forwards';
      sliderImages[sliderImages.length - 1].current.style.animation =
        'next01 1s ease-in forwards';
      setCounter(0);
    }
  };

  const slidePrev = () => {
    sliderImages[counter].current.style.animation =
      'prev01 1s ease-in forwards';

    if (counter === 0) {
      sliderImages[sliderImages.length - 1].current.style.animation =
        ' prev02 1s ease-in forwards';
      setCounter(sliderImages.length - 1);
    } else {
      sliderImages[counter - 1].current.style.animation =
        'prev02 1s ease-in forwards';
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      slideNext();
    }, 3000);
  });

  return (
    <div className=" relative bg-red-500 w-full h-[340px] rounded-lg select-none overflow-hidden ">
      {/* SLIDE IMAGES */}
      <img
        src={slide01}
        alt=""
        className=" absolute w-full h-full left-0"
        ref={img01Ref}
      />
      <img src={slide02} alt="" className={slideImageStyle} ref={img02Ref} />
      <img src={slide03} alt="" className={slideImageStyle} ref={img03Ref} />
      <img src={slide04} alt="" className={slideImageStyle} ref={img04Ref} />
      <img src={slide05} alt="" className={slideImageStyle} ref={img05Ref} />
      <img src={slide06} alt="" className={slideImageStyle} ref={img06Ref} />
      <img src={slide07} alt="" className={slideImageStyle} ref={img07Ref} />
      <img src={slide08} alt="" className={slideImageStyle} ref={img08Ref} />

      {/* SLIDE BUTTONS */}
      <MdOutlineKeyboardArrowRight
        className={`${slideButtonStyle} right-0 `}
        onClick={slideNext}
      />
      <MdOutlineKeyboardArrowLeft
        className={`${slideButtonStyle} left-0`}
        onClick={slidePrev}
      />

      {/*INDICATORS*/}
      <div className=" absolute flex gap-1 bottom-6 left-0 right-0 w-fit mx-auto">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white ${
              counter === index ? 'bg-slate-500' : 'bg-slate-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
