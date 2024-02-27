import { Link } from 'react-router-dom';
import { items } from '../../data/items/items';

const JustForYou = () => {
  const justForYouItems = items.filter((item, index) => index < 18);
  return (
    <div className="mt-10">
      <h1 className=" text-xl sm:text-3xl text-slate-700">Just For You</h1>
      <div className="py-4 w-full grid grid-cols-6 sm:gap-4 gap-2 ">
        {justForYouItems.map((item, index) => (
          <Link
            to={`/item/${item.id}`}
            key={index}
            className="  bg-white hover:shadow-[0_3px_5px_#b3b3b3] rounded-sm cursor-pointer flex flex-col items-center"
          >
            <img
              src={item.photo}
              alt="photo"
              className=" w-16 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44"
            />
            <div className="ml-2 w-full">
              <p className="text-ellipsis line-clamp-2 w-full font-semibold sm:text-base text-[8px]">
                {item.desc}
              </p>
              <span className=" text-navbarBackground text-xs sm:text-lg">
                Rs.{Math.round(item.price - (item.discount / 100) * item.price)}
              </span>
              <p className="sm:text-[12px] text-[8px]">
                <span className=" line-through text-slate-400">
                  Rs.
                  {item.price}
                </span>
                <span className="ml-1 sm:text-sm text-[8px]">
                  {' '}
                  -{item.discount}%
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
