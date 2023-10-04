import React, { useState } from 'react';
import { flashSale } from '../../data/flashSale';

const FlashSale = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDownDate = new Date('Oct 5, 2023 20:31:00').getTime();

  const x = setInterval(() => {
    const today = new Date().getTime();
    const distance = countDownDate - today;
    setHours(Math.floor(distance / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div className="mt-10">
      <h1 className=" text-3xl">Flash Sale</h1>
      {/* CONTAINER */}
      <div className="bg-white mt-4 rounded-lg">
        {/* CONTAINER TOP */}
        <div className="flex justify-between px-8 py-3 border-b">
          <div className="flex gap-16 items-center">
            <span className=" text-navbarBackground">On Sale Now</span>
            {/* TIMMER */}
            <div className="flex gap-4 items-center">
              <span>Ending in</span>
              <div className="h-fit w-8 text-center text-xl py-1 rounded-sm text-white font-semibold bg-navbarBackground">
                {hours}
              </div>
              <div className=" h-fit w-8 text-center text-xl py-1 rounded-sm text-white font-semibold bg-navbarBackground">
                {minutes}
              </div>
              <div className=" h-fit w-8 text-center text-xl py-1 rounded-sm text-white font-semibold bg-navbarBackground">
                {seconds}
              </div>
            </div>
          </div>

          <button className="border border-navbarBackground rounded-sm p-1 text-navbarBackground">
            SHOP MORE
          </button>
        </div>

        {/* CONTAINER BOTTOM */}

        <div className="py-4 w-full grid grid-cols-6 ">
          {flashSale.map((item, index) => (
            <div
              key={index}
              className=" pl-2 text-sm hover:shadow-[0_3px_5px_#b3b3b3] rounded-sm cursor-pointer"
            >
              <img src={item.photo} alt="photo" className="w-44 h-44" />
              <p className="text-ellipsis line-clamp-2 w-full font-semibold">
                {item.desc}
              </p>
              <span className=" text-navbarBackground text-lg">
                Rs.{Math.round(item.price - (item.discount / 100) * item.price)}
              </span>
              <p className="text-[12px]">
                <span className=" line-through text-slate-400">
                  Rs.
                  {item.price}
                </span>
                <span className="ml-1"> -{item.discount}%</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
