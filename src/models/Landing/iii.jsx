{
  Categories.map((category, index) => (
    <div className="group py-[2.5px] w-[250px] " key={index}>
      <p className=" cursor-pointer w-full px-4 flex justify-between items-center hover:bg-[#f6f6f6] hover:text-navbarBackground ">
        {category.name}
        <MdOutlineKeyboardArrowRight className=" text-xl invisible group-hover:visible" />
      </p>

      {/* SUBCATEGORY CONTAINER */}

      <div className=" absolute left-[250px] top-0 w-[220px] h-[320px] py-[10px] shadow-[0_0_3px_gray] rounded-lg bg-white text-[12px] text-gray-500  flex-col hidden group-hover:flex">
        {category.subCat.map((subCat, index) => (
          <p
            className=" cursor-pointer w-full px-4 py-[3px] flex justify-between items-center hover:bg-slate-100 hover:text-navbarBackground "
            key={index}
          >
            {subCat}
            <MdOutlineKeyboardArrowRight className=" text-xl invisible group-hover:visible" />
          </p>
        ))}
      </div>
    </div>
  ));
}
