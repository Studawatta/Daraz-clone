import React from 'react';
import {
  bangladeshFlag,
  cashOnDelivery,
  facebook,
  instagram,
  masterCard,
  myanmarFlag,
  nepalFlag,
  pakistanFlag,
  qr,
  srilankaFlag,
  twitter,
  visaCard,
  web,
  youtube,
} from '../assets/icons/footerIcons';

import { logoIcon } from '../assets/icons';

const Footer = () => {
  const subHead = '  text-sm sm:text-2xl text-navbarBackground mb-3';
  const linkContStyle = 'flex flex-col gap-1 ';
  const linkStyle =
    ' text-xs sm:text-sm font-medium text-slate-800 cursor-pointer hover:underline';
  const iconStyle = 'sm:w-6 sm:h-6 w-4 h-4 cursor-pointer';
  return (
    <div className=" bg-[#dadad7] xl:px-40 px-2 pt-10 pb-14 flex justify-between   ">
      {/* COL_01 */}
      <div>
        {/* CUSTOMER_CARE */}
        <div className={linkContStyle}>
          <h2 className={subHead}>Customer Care</h2>
          <span className={linkStyle}>Help Center</span>
          <span className={linkStyle}>How to Buy</span>
          <span className={linkStyle}>Corporate & Bulk Purchasing</span>
          <span className={linkStyle}>Returns & Refunds</span>
          <span className={linkStyle}>Contact Us</span>
        </div>
        {/* EARN_WITH_DARAZ */}
        <div className={`${linkContStyle} mt-4`}>
          <h2 className={subHead}>Earn With Daraz</h2>
          <span className={linkStyle}>Daraz University</span>
          <span className={linkStyle}>Sell on Daraz</span>
          <span className={linkStyle}>Code of Conduct</span>
          <span className={linkStyle}>Join the Daraz Affiliate Programm</span>
        </div>
      </div>

      {/* COL_02 */}
      <div className={linkContStyle}>
        <h2 className={subHead}>Daraz</h2>
        <span className={linkStyle}>About Daraz</span>
        <span className={linkStyle}>Careers</span>
        <span className={linkStyle}>Daraz Stores</span>
        <span className={linkStyle}>Daraz Donates</span>
        <span className={linkStyle}>Daraz Blog</span>
        <span className={linkStyle}>Terms & Conditions</span>
        <span className={linkStyle}>Privacy Policy</span>
        <span className={linkStyle}>Mobile App</span>
        <span className={linkStyle}>Live Cricket Streaming</span>
        <span className={linkStyle}>KOKO EDU</span>
      </div>

      {/* COL_03 */}
      <div>
        {/* DARAZ_INTERNATIONAL */}
        <div className={linkContStyle}>
          <h1 className={subHead}>Daraz International</h1>
          <div className="grid sm:grid-cols-2 grid-cols-3 gap-y-2">
            <div className="flex items-center gap-1">
              <img src={pakistanFlag} alt="flag" className={iconStyle} />
              <span className={`${linkStyle} hidden sm:block`}>Pakistan</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={bangladeshFlag} alt="flag" className={iconStyle} />
              <span className={`${linkStyle} hidden sm:block`}>Bangladesh</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={srilankaFlag} alt="flag" className={iconStyle} />
              <span className={`${linkStyle} hidden sm:block`}>Sri Lanka</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={myanmarFlag} alt="flag" className={iconStyle} />
              <span className={`${linkStyle} hidden sm:block`}>Myanmar</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={nepalFlag} alt="flag" className={iconStyle} />
              <span className={`${linkStyle} hidden sm:block`}>Nepal</span>
            </div>
          </div>
        </div>
        {/* PAYMENT_METHODS */}
        <div>
          <h1 className={`${subHead} mt-10`}>Payment Methods</h1>
          <div className="flex sm:gap-4 gap-1">
            <img
              src={cashOnDelivery}
              alt="payment"
              className="lg:w-14 lg:h-10 sm:w-10 sm:h-8 w-6 h-4"
            />
            <img
              src={visaCard}
              alt="payment"
              className="lg:w-14 lg:h-10 sm:w-10 sm:h-8 w-6 h-4"
            />
            <img
              src={masterCard}
              alt="payment"
              className="lg:w-14 lg:h-10 sm:w-10 sm:h-8 w-6 h-4"
            />
          </div>
        </div>
      </div>

      {/* COL_04 */}

      <div>
        <img src={qr} alt="QR" className="sm:w-24 sm:h-24 w-12 h-12" />
        <div className="flex mt-4 items-center cursor-pointer">
          <img src={logoIcon} alt="logo" className="sm:w-10 sm:h-10 w-5 h-5" />
          <p className="flex flex-col text-navbarBackground sm:text-base text-[8px]">
            <span> Happy Shopping</span>
            <span className=" text-[6px] sm:text-xs text-black hover:underline">
              Download App
            </span>
          </p>
        </div>
        <div>
          <h1 className={`${subHead} mt-8`}>Follow Us</h1>
          <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-y-2">
            <img src={facebook} alt="facebook" className={iconStyle} />
            <img src={twitter} alt="twitter" className={iconStyle} />
            <img src={instagram} alt="instagram" className={iconStyle} />
            <img src={youtube} alt="youtube" className={iconStyle} />
            {/* <img src={web} alt="web" className={iconStyle} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
