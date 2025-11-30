import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import video from '../../assets/istockphoto-2166194509-640_adpp_is.mp4';
import img from '../../assets/ferming.jpg';

function Videos() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">

        {/* Left - Video Section */}
        <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg">
          <video
            src={video}
            controls
            className="w-full h-72 sm:h-96 md:h-[400px] object-cover rounded-xl"
          />
          <h1 className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl bg-black/40 px-3 py-1 rounded">
            See how we naturally produce our products
          </h1>
        </div>

        {/* Right - Newsletter / Image */}
        <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg bg-white">
          <img
            src={img}
            alt="newsletter"
            className="w-full h-72 sm:h-96 md:h-[400px] object-cover rounded-xl"
          />

          {/* Overlay */}
          <div className="absolute bottom-6 left-4 right-4 bg-black/50 backdrop-blur-md p-4 rounded-lg">
            <h1 className="text-white font-semibold text-base sm:text-lg leading-snug">
              Subscribe to our newsletter to get more offers
            </h1>

            {/* Newsletter Form - Fully Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md border border-white/40 bg-white/10 text-white 
                placeholder:text-white/70 focus:outline-none w-full"
              />

              <button className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-md 
              hover:bg-green-700 transition flex justify-center items-center gap-1">
                <FaArrowRightLong size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Videos;
