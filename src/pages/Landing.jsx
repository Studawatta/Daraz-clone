import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../models/Landing/Categories';
import ImageSlider from '../components/ImageSlider';

const Landing = () => {
  return (
    <div>
      <div className="flex pt-6 gap-[10px] justify-between">
        <Categories />
        <ImageSlider />
      </div>
    </div>
  );
};

export default Landing;
