import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { categories } from '../data/categories_drop/categoriesDrop';

const Categories = () => {
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [category, setCategory] = useState('');
  const selectedCategory = categories.find((ctgry) => ctgry.name === category);
  return (
    <div>
      {/* CATEGORY CONTAINER */}

      <div
        className="relative w-[85px] sm:w-[180px] lg:w-[240px] h-[148px] sm:h-[300px] lg:h-[340px] flex items-center shadow-[0_0_3px_gray] rounded-lg bg-white text-[6px] sm:text-[11px] lg:text-[13px] text-gray-500 font-bold sm:font-normal"
        onMouseLeave={() => {
          setShowSubCategory(false);
          setCategory('');
        }}
      >
        <div className="w-full h-fit">
          {/* MAPPING CATEGORIES */}

          {categories.map((item, index) => (
            <div
              key={index}
              className={` hover:bg-[#f6f6f6] hover:text-navbarBackground h-fit flex items-center justify-between pr-0 sm:pr-4 ${
                category === item.name
                  ? 'text-navbarBackground bg-[#f6f6f6]'
                  : ''
              }`}
              onMouseOver={() => {
                setCategory(item.name);
                setShowSubCategory(true);
              }}
            >
              <p className=" cursor-pointer sm:mt-0 w-full px-[2px] sm:px-4 sm:py-1 py-[1px] flex justify-between items-center   ">
                {item.name}
              </p>
              <MdOutlineKeyboardArrowRight
                className={`  sm:text-2xl ${
                  category === item.name ? 'block' : 'hidden'
                } `}
              />
            </div>
          ))}
        </div>

        {/* SUBCATEGORY CONTAINER */}

        <div
          className=" w-[90px] sm:w-[190px] lg:w-[250px] absolute left-[80px] sm:left-[180px] lg:left-[240px] pl-[10px] z-20"
          onMouseOver={() => setShowSubCategory(true)}
          onMouseLeave={() => {
            setCategory('');
            setShowSubCategory(false);
          }}
        >
          <div
            className={` w-[85px] sm:w-[180px] lg:w-[240px] h-[148px] sm:h-[300px] lg:h-[340px] py-[10px] shadow-[0_0_3px_gray] rounded-lg bg-white sm:text-[12px] text-gray-500
          ${showSubCategory ? 'block' : 'hidden'}
          `}
          >
            {/* MAPPING SUBCATEGORIES */}

            {selectedCategory &&
              selectedCategory.subCat.map((sub, index) => (
                <p
                  key={index}
                  className=" cursor-pointer w-full sm:mt-0 mt-[-5px] sm:px-4 px-1 py-1 flex justify-between items-center hover:bg-slate-100 hover:text-navbarBackground "
                >
                  {sub}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
