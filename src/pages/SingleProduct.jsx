import { useState, useEffect } from 'react';

import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import { items } from '../data/items/items';

const SingleProduct = () => {
  const [quentity, setQuentity] = useState(1);

  const { id } = useParams();
  const itemId = parseInt(id);

  const item = items.find((item) => item.id === itemId);
  console.log(item);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20 select-none">
      <div className="w-full h-[400px] bg-white flex flex-col items-center lg:flex-row ">
        {/* LEFT */}
        <div className="w-1/3 h-[400px] p-3 bg-slate-200 ">
          <img
            src={item.photo}
            alt="productImg"
            className="w-full h-full object-contain"
          />
        </div>
        {/* RIGHT */}
        <div className="w-2/3 px-10 py-5">
          <h3 className=" text-3xl font-medium">{item.desc}</h3>
          <hr className="w-full mt-5" />

          <div className="mt-5">
            <span className="text-3xl text-red-600 font-medium">
              Rs.{Math.round(item.price - (item.discount / 100) * item.price)}
            </span>
            <p className="mt-3 text-slate-500">
              <span className="line-through">Rs.{item.price}</span>
              <span className="ml-2"> -{item.discount}%</span>
            </p>
          </div>

          {/* QUENTITY_SETTER */}

          <div className="mt-5 text-xl text-slate-600 flex gap-10">
            <span>Quentity</span>
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
          {/* ADD_TO_CART_BUTTON */}
          <button className=" bg-[#ff6e1a] hover:bg-navbarBackground text-3xl text-white px-10 py-1 rounded-sm mt-10 mx-auto block">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
