import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { echidna, echidnaLogo } from '../../assets';
import { darazMall } from '../../data/darazMall';

const DarazMall = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl text-slate-700">DarazMall</h1>
        <button className=" text-navbarBackground font-bold text-sm flex items-center">
          SHOP MORE <MdOutlineKeyboardArrowRight className=" text-2xl" />{' '}
        </button>
      </div>
      <div className="mt-4 flex justify-between items-center">
        {darazMall.map((item, index) => (
          <div
            key={index}
            className="h-[265px] w-48 bg-white shadow-sm cursor-pointer hover:shadow-[0_3px_5px_#b3b3b3]"
          >
            <div className=" relative w-full h-[185px] bg-gradient-to-t from-slate-200">
              <img src={item.pic} alt="pic" className="w-44 h-44 mx-auto" />
              <img
                src={item.logo}
                alt=""
                className=" absolute left-0 right-0 bottom-[-24px] w-12 h-12 shadow-md mx-auto"
              />
            </div>
            <div className="flex flex-col h-20 items-center justify-center ">
              <span className=" text-sm font-medium mt-3">{item.name}</span>
              <span className=" text-xs font-medium text-slate-400">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarazMall;
