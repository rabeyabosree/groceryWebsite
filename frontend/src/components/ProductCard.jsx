import React, { useState } from 'react'
import { HiOutlinePlus } from "react-icons/hi2";
import { SlHeart } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";


function ProductCard({ name, variants, rating, sold, image, onclick }) {
  const [added, setAdded] = useState(false)
  const [loved, setLoved] = useState(false)


  return (
    <div onClick={onclick} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg 
                    transition-all p-2 sm:p-3 cursor-pointer">

      {/* Image + Cart */}
      <div className="relative w-full">
        <img src={image} alt={name}
          className="h-28 sm:h-32 md:h-36 w-full object-cover rounded-lg" />

        <button
          onClick={() => setAdded(!added)}
          className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-600
                     text-white rounded-full p-1.5 text-sm transition"
        >
          {added ? <FiShoppingCart /> : <HiOutlinePlus />}
        </button>
      </div>
      {/* Price */}
      <p className="font-bold text-green-600 text-sm sm:text-[15px] md:text-base text-left mt-0.5">
        ৳ {variants[0].price}
      </p>
      {/* Text Section */}
      <p className="mt-2 font-semibold text-[10px] sm:text-sm md:text-base text-left leading-tight">
        {name}
      </p>

      {/* Weight */}
      <p className="text-[11px] sm:text-xs text-gray-600 text-left">
        {variants[0].weight}
      </p>



      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">

        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400 text-[12px]" />
          <p>{rating}</p>
        </span>

        <p>{sold} sold</p>

        <button
          onClick={() => setLoved(!loved)}
          className="text-[13px] md:text-lg hover:scale-110 transition"
        >
          {loved ? <ImHeart className="text-red-500" /> : <SlHeart />}
        </button>

      </div>
    </div>
  )
}


export default ProductCard
