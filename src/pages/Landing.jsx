import { ImageSlider, Categories } from '../components';
import {
  QuickLinks,
  FlashSale,
  DarazMall,
  Collections,
  JustForYou,
} from '../models';

const Landing = () => {
  return (
    <div>
      <div className="flex pt-6 gap-[10px] justify-between ">
        <Categories />
        <ImageSlider />
      </div>
      <QuickLinks />
      <FlashSale />
      <DarazMall />
      <Collections />
      <JustForYou />
    </div>
  );
};

export default Landing;
