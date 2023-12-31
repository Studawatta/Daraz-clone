import React from 'react';
import logo from '../assets/logo.png';
import { logoIcon } from '../assets/icons';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowCart, showCart }) => {
  const navtopLinkStyle = ' cursor-pointer hover:text-orange-200';
  const navbottomLinkStyle =
    'flex items-center gap-2 font-bold px-2 py-1 rounded-md hover:bg-[#cc4b00] cursor-pointer text-white';
  const helpItemStyle = ' hover:text-navbarBackground hover:underline';
  return (
    <div className="px-2 xl:px-40 fixed top-0 w-full bg-navbarBackground h-[60px] sm:h-[90px] z-50">
      <div>
        {/* NAVTOP */}

        <div className="flex justify-between  text-white font-semibold ">
          {/* NAVTOP LEFT */}

          <div className=" flex gap-4 text-[9px] sm:text-[12px] mt-1">
            <span className={navtopLinkStyle}>Become a Seller</span>
            <span className={navtopLinkStyle}>Daraz Donates</span>
            <span className=" relative cursor-pointer group hover:text-orange-200">
              Help & Support
              <div
                className={` absolute left-[-50px] w-40 top-9 hidden group-hover:flex flex-col gap-3 border border-slate-400
                               rounded-md bg-white z-10 text-slate-500 font-normal text-sm p-4`}
              >
                <div
                  className={`w-fit absolute top-[-19px] left-0 right-0 mx-auto border-[10px]
                               border-[transparent_transparent_white_transparent]`}
                ></div>
                <p className={helpItemStyle}>Help Center</p>
                <p className={helpItemStyle}>Chat With Us</p>
                <p className={helpItemStyle}>Order</p>
                <p className={helpItemStyle}>Shipping & Delivery</p>
                <p className={helpItemStyle}>Payments</p>
                <p className={helpItemStyle}>Returns & Refunds</p>
              </div>
            </span>
          </div>

          {/* NAVTOP RIGHT */}

          <div className="flex gap-1 bg-[#cc4b00] p-[2px] sm:p-2 rounded-[0_0_8px_8px] text-[10px] sm:text-sm cursor-pointer hover:text-orange-200">
            <img
              src={logoIcon}
              alt="daraz_logo"
              className="w-4 h-4 sm:h-5 sm:w-5"
            />
            <span className={navtopLinkStyle}>Save More on App</span>
          </div>
        </div>

        {/* NAVBOTTOM */}

        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="daraz_logo"
              className="h-6 sm:h-12 cursor-pointer"
            />
          </Link>

          {/* SEARCH */}

          <div className="flex items-center text-[10px] sm:text-base pl-2 pr-1 sm:pl-4 sm:pr-2  h-fit w-3/5 rounded-xl overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full sm:h-10 h-6 focus:outline-none"
            />
            <div className="bg-red-100 px-1 py-[2px] sm:px-3 sm:py-1  rounded-md sm:text-xl text-navbarBackground cursor-pointer">
              <BiSearch />
            </div>
          </div>

          {/* LOGIN SIGNUP */}

          <div className="flex text-[10px] sm:text-sm items-center text-white  gap-2">
            <div className={navbottomLinkStyle}>
              <BsPerson className=" text-lg sm:text-2xl" />
              <span>Login</span>
            </div>
            <div className="h-3 border"></div>
            <div className={navbottomLinkStyle}>
              <span>Sign Up</span>
            </div>
          </div>

          {/* LANGUAGE */}

          <div className={navbottomLinkStyle}>
            <TfiWorld className="sm:text-xl" />
            <select
              name=""
              id=""
              className=" bg-transparent font-bold focus:outline-none text-sm sm:text-base"
            >
              <option value="">En</option>
            </select>
          </div>

          {/* CART */}

          <div className={navbottomLinkStyle}>
            <PiShoppingCartSimpleLight
              className="text-xl sm:text-3xl"
              onClick={() => setShowCart(!showCart)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
