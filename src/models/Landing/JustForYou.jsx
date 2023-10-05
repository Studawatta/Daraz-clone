import React from 'react';
import { justForYou } from '../../data/just_for_you/justForYou';

const JustForYou = () => {
  return (
    <div className="mt-10">
      <h1 className=" text-3xl">Just For You</h1>
      <div className="py-4 w-full grid grid-cols-6 gap-4 ">
        {justForYou.map((item, index) => (
          <div
            key={index}
            className=" pl-2 bg-white text-sm hover:shadow-[0_3px_5px_#b3b3b3] rounded-sm cursor-pointer"
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
  );
};

export default JustForYou;
