import React from "react";
import { MdLocalShipping, MdDiscount, MdOutlineLocalOffer } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";

import img1 from "../../assets/pexels-kampus-7658789.jpg"; // Left Top
import img2 from "../../assets/pexels-marceloverfe-6059778.jpg"; // Main Banner

function Hero() {
  return (
    <section className="w-full pt-10 pb-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 ">
          <img
            src={img1}
            className="rounded-xl shadow-md w-full h-[250px] md:h-[260px] object-cover"
          />

          <div className="flex items-center gap-3 p-4 bg-white shadow rounded-xl">
            <MdLocalShipping className="text-green-600 text-3xl" />
            <p className="text-[15px] font-medium">Super Fast Local Delivery</p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white shadow rounded-xl">
            <MdDiscount className="text-green-600 text-3xl" />
            <p className="text-[15px] font-medium">Exclusive Promo Codes</p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white shadow rounded-xl">
            <AiFillLike className="text-green-600 text-3xl" />
            <p className="text-[15px] font-medium">Most Trusted Grocery Store</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative col-span-1 md:col-span-2">

          {/* MAIN BANNER */}
          <div className="relative">
            <img
              src={img2}
              className="w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl object-cover shadow-lg"
            />

            {/* REVIEW OVERLAY */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/5 border border-gray-300 p-4 rounded-xl shadow-xl w-[90%] sm:w-[360px]">
              <h2 className="text-[14px] font-semibold">
                Customer Satisfaction <span className="text-green-600 font-bold">95%</span>
              </h2>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                    className="w-10 h-10 rounded-full border"
                  />
                  <div>
                    <h1 className="text-[13px] font-semibold mt-1">Sarah Mills</h1>
                    <p className="text-[12px] text-gray-500 leading-tight">
                      Best fresh food delivery experience!
                    </p>
                  </div>
                </div>

                {/* NAV BUTTONS */}
                <div className="flex gap-2 ml-auto">
                  <button className="p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition">
                    <FaArrowLeft size={12} />
                  </button>
                  <button className="p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition">
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>

              <button className="mt-3 bg-white py-2 px-4 rounded-2xl w-full text-center text-[12px] font-semibold text-green-600 flex items-center justify-center gap-1">
                Read more reviews <IoIosArrowForward />
              </button>

              {/* CTA BOX OVERLAY */}
            <div className="mt-6 bg-yellow-100 backdrop-blur-sm  sm:px-12 py-6 sm:py-8 rounded-xl shadow-xl text-center w-100%] sm:w-auto">
              <h1 className="text-[16px] sm:text-[18px] font-bold leading-tight">
                All your Grocery needs here!
              </h1>
              <button className="mt-3 text-sm w-full bg-green-600 text-white  p-2 rounded-full  hover:bg-green-700 transition">
                Get 3 Free Deliveries
              </button>
            </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURE BOXES */}
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-12 bg-green-200 py-6 text-center text-[14px] sm:text-[15px] font-medium rounded-xl shadow-inner gap-2">
        <p><span className="font-bold text-green-700">37,500+</span> Products Available</p>
        <p className="flex justify-center items-center gap-2"><IoIosNotificationsOutline /> No weight limit</p>
        <p className="flex justify-center items-center gap-2"><CiDeliveryTruck /> Free Delivery*</p>
        <p className="flex justify-center items-center gap-2"><MdOutlineLocalOffer /> Daily Offers</p>
      </div>
    </section>
  );
}

export default Hero;
