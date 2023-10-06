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
  const subHead = ' text-2xl text-navbarBackground mb-3';
  const linkContStyle = 'flex flex-col gap-1 ';
  const linkStyle =
    'text-sm font-medium text-slate-800 cursor-pointer hover:underline';
  const iconStyle = 'w-6 h-6 cursor-pointer';
  return (
    <div className=" bg-[#dadad7] px-40 pt-10 pb-14 flex justify-between   ">
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
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex items-center gap-1">
              <img src={pakistanFlag} alt="flag" className={iconStyle} />
              <span className={linkStyle}>Pakistan</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={bangladeshFlag} alt="flag" className={iconStyle} />
              <span className={linkStyle}>Bangladesh</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={srilankaFlag} alt="flag" className={iconStyle} />
              <span className={linkStyle}>Sri Lanka</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={myanmarFlag} alt="flag" className={iconStyle} />
              <span className={linkStyle}>Myanmar</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={nepalFlag} alt="flag" className={iconStyle} />
              <span className={linkStyle}>Nepal</span>
            </div>
          </div>
        </div>
        {/* PAYMENT_METHODS */}
        <div>
          <h1 className={`${subHead} mt-10`}>Payment Methods</h1>
          <div className="flex gap-4">
            <img src={cashOnDelivery} alt="payment" className="w-14 h-10" />
            <img src={visaCard} alt="payment" className="w-14 h-10" />
            <img src={masterCard} alt="payment" className="w-14 h-10" />
          </div>
        </div>
      </div>

      {/* COL_04 */}

      <div>
        <img src={qr} alt="QR" className="w-24 h-24" />
        <div className="flex mt-4 items-center cursor-pointer">
          <img src={logoIcon} alt="logo" className="w-10 h-10" />
          <p className="flex flex-col text-navbarBackground">
            <span> Happy Shopping</span>
            <span className="text-xs text-black hover:underline">
              Download App
            </span>
          </p>
        </div>
        <div>
          <h1 className={`${subHead} mt-8`}>Follow Us</h1>
          <div className="flex gap-2">
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
