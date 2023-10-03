import React from 'react';
import {
  promotion,
  shieldIcon,
  vanIcon,
  returnIcon,
  tagIcon,
  starIcon,
  logoShieldIcon,
  fashionIcon,
  beautyIcon,
  any3Icon,
  martIcon,
  playIcon,
  homeIcon,
  leisureIcon,
  techIcon,
  payIcon,
  shippingIcon,
} from '../../assets';
const Divider = () => {
  return <div className="bg-slate-500 w-[1px] h-[40%]"></div>;
};

const QuickLinks = () => {
  const topLinkStyle = 'flex items-center gap-1 cursor-pointer ';
  const topLinkIconStyle = 'w-5 h-5';
  const bottomLinkStyle =
    'flex flex-col items-center justify-center cursor-pointer';
  const bottomLinkIconStyle = 'w-20 h-20';
  return (
    <div className="mt-10">
      {/* PROMOTION */}
      <div className="h-40 w-full rounded-3xl overflow-hidden cursor-pointer">
        <img src={promotion} alt="" className="h-full w-full object-cover " />
      </div>
      {/* TOP LINKS */}

      <div className="w-full h-10 mt-3 bg-[#ffefe6] hover:bg-[#ffdfcc] rounded-lg flex justify-between items-center px-4">
        <div className={topLinkStyle}>
          <img src={shieldIcon} alt="Icon" className={topLinkIconStyle} />
          <p>Fashion</p>
        </div>
        <Divider />
        <div className={topLinkStyle}>
          <img src={vanIcon} alt="Icon" className={topLinkIconStyle} />
          <p>Nationwide Delivery</p>
        </div>
        <Divider />
        <div className={topLinkStyle}>
          <img src={returnIcon} alt="Icon" className={topLinkIconStyle} />
          <p>Free & Easy Returns</p>
        </div>
        <Divider />
        <div className={topLinkStyle}>
          <img src={tagIcon} alt="Icon" className={topLinkIconStyle} />
          <p>Besh Price Guaranteed</p>
        </div>
        <Divider />
        <div className={topLinkStyle}>
          <img src={starIcon} alt="Icon" className={topLinkIconStyle} />
          <p>100% Authentic Products</p>
        </div>
        <Divider />
        <div className={topLinkStyle}>
          <img src={logoShieldIcon} alt="Icon" className={topLinkIconStyle} />
          <p>Daraz Verified</p>
        </div>
      </div>

      {/* BOTTOM LINKS */}

      <div className="bg-white h-36 mt-8 flex justify-between items-center px-4 rounded-lg">
        <div className={bottomLinkStyle}>
          <img src={fashionIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Fashion</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={beautyIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Beauty</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={any3Icon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Any 3 For Rs. 1399</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={martIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Mart</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={playIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Play & Win</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={homeIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Home & Kitchen</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={leisureIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>
            Leisure &,
            <br /> Recreation
          </p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={techIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Tech Gadgets</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={payIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Daraz Pay</p>
        </div>
        <Divider />
        <div className={bottomLinkStyle}>
          <img src={shippingIcon} alt="Icon" className={bottomLinkIconStyle} />
          <p>Free Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
