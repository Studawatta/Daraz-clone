import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { collections } from '../../data/collections/collections';
const Collections = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-xl sm:text-3xl text-slate-700">Collections</h1>
        <button className=" text-navbarBackground font-bold text-sm flex items-center">
          SHOP MORE <MdOutlineKeyboardArrowRight className=" text-2xl" />{' '}
        </button>
      </div>
      <div className="mt-4  grid grid-cols-4 bg-slate-300 gap-[1px]">
        {collections.map((collection, index) => (
          <div
            key={index}
            className=" relative hover:z-10 flex flex-col justify-center items-center bg-white sm:py-4 py-2 cursor-pointer hover:shadow-[0_0_5px_gray]"
          >
            <div className=" flex">
              <div className=" flex flex-col items-center gap-1">
                <span className="text-[10px] sm:text-sm flex justify-center items-center">
                  {collection.name}
                </span>
                <span className=" text-[8px] sm:text-xs text-slate-500">
                  {collection.products_count} products
                </span>
              </div>

              <MdOutlineKeyboardArrowRight className=" text-xs sm:text-lg mt-[2px]" />
            </div>

            <div className="flex sm:mt-5 mt-2 sm:gap-12 gap-4">
              <img
                src={collection.pic01}
                alt="collection_pic"
                className="sm:w-16 sm:h-16 w-6 h-6"
              />
              <img
                src={collection.pic02}
                alt="collection_pic"
                className="sm:w-16 sm:h-16 w-6 h-6"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
