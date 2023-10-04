import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Categories from '../components/Categories';
import QuickLinks from '../models/Landing/QuickLinks';
import FlashSale from '../models/Landing/FlashSale';
import DarazMall from '../models/Landing/DarazMall';

const Landing = () => {
  return (
    <div>
      <div className="flex pt-6 gap-[10px] justify-between">
        <Categories />
        <ImageSlider />
      </div>
      <QuickLinks />
      <FlashSale />
      <DarazMall />
    </div>
  );
};

export default Landing;
