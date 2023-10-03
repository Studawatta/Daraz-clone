import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Categories from '../components/Categories';
import QuickLinks from '../models/Landing/QuickLinks';

const Landing = () => {
  return (
    <div>
      <div className="flex pt-6 gap-[10px] justify-between">
        <Categories />
        <ImageSlider />
      </div>
      <QuickLinks />
    </div>
  );
};

export default Landing;
