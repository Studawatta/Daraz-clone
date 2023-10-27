import React, { useState } from 'react';
import { item06 } from '../data/items/images';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';

const Cart = ({ setShowCart }) => {
  const [quentity, setQuentity] = useState(1);
  return (
    <div className=" relative pt-14 flex select-none gap-5">
      {/* BACK_BUTTON */}

      <div
        onClick={() => setShowCart(false)}
        className=" absolute top-4 right-0 text-lg text-blue-400 cursor-pointer underline "
      >
        back
      </div>
      {/* LEFT_CONTAINER */}
      <div className="w-[65%]">
        <div className="w-full bg-white flex justify-between px-10 py-4 rounded-md items-center ">
          <div className=" flex gap-5 items-center">
            <img src={item06} alt="" className="w-12 h-12" />
            <h3 className=" font-medium">Item Name</h3>
          </div>

          <div className="flex gap-20">
            <span className=" text-xl text-navbarBackground">Price</span>
            <div className="flex items-center gap-3">
              <HiOutlineMinusSm
                className={`bg-slate-100 w-7 h-7 px-1 text-slate-500 rounded-sm ${
                  quentity === 1 ? ' cursor-not-allowed' : 'cursor-pointer '
                }`}
                onClick={() => {
                  if (quentity > 1) {
                    setQuentity(quentity - 1);
                  }
                }}
              />
              <span className=" select-none">{quentity}</span>
              <HiOutlinePlusSm
                className="bg-slate-100 w-7 h-7 px-1 text-slate-500 rounded-sm cursor-pointer"
                onClick={() => setQuentity(quentity + 1)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT_CONTAINER */}
      <div className=" w-[35%]  bg-white px-6 py-2 flex flex-col gap-3">
        <h1 className=" text-xl font-medium">Order Summary</h1>
        <div className="flex justify-between ">
          <span className=" text-slate-600">Subtotal(0 items)</span>{' '}
          <span>Rs.0</span>
        </div>
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="border-2 py-1 px-2 w-60"
          />
          <button className=" bg-blue-400 px-6 rounded-sm text-white">
            APPLY
          </button>
        </div>
        <div className="flex justify-between font-medium text-lg ">
          <span>Total</span>{' '}
          <span className=" text-navbarBackground">Rs.0</span>
        </div>
        <button className=" bg-navbarBackground text-white w-full py-1 rounded-sm">
          PROCEED TO CHECHOUT(0)
        </button>
      </div>
    </div>
  );
};

export default Cart;
