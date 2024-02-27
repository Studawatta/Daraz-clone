import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { darazMall } from '../../data/darazMall/darazMall';
const DarazMall = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-xl sm:text-3xl text-slate-700">DarazMall</h1>
        <button className=" text-navbarBackground font-bold text-sm flex items-center">
          SHOP MORE <MdOutlineKeyboardArrowRight className=" text-2xl" />{' '}
        </button>
      </div>
      <div className="mt-4 flex justify-between items-center">
        {darazMall.map((item, index) => (
          <div
            key={index}
            className=" h-[130px] sm:h-[220px] lg:h-[265px] w-24 sm:w-28 lg:w-48 bg-white shadow-sm cursor-pointer hover:shadow-[0_3px_5px_#b3b3b3]"
          >
            <div className=" relative w-full sm:h-[150px] lg:h-[185px] bg-gradient-to-t from-slate-200">
              <img
                src={item.pic}
                alt="pic"
                className=" w-14 h-14 sm:w-28 sm:h-28 lg:w-44 lg:h-44 mx-auto"
              />
              <img
                src={item.logo}
                alt=""
                className=" absolute left-0 right-0 bottom-[-12px] sm:bottom-[-24px] w-6 h-6 sm:w-12 sm:h-12 shadow-md mx-auto"
              />
            </div>
            <div className="flex flex-col h-20 items-center justify-center ">
              <span className=" text-[10px] sm:text-sm font-medium mt-3">
                {item.name}
              </span>
              <span className=" text-[8px] sm:text-xs font-medium text-slate-400">
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
