import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Sarah Mills", role: "Regular Customer", message: "Best fresh food delivery experience! Highly recommend.", image: "https://randomuser.me/api/portraits/women/21.jpg" },
  { id: 2, name: "John Doe", role: "Happy Shopper", message: "Fresh products and super fast delivery. Loved it!", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 3, name: "Emma Watson", role: "Grocery Lover", message: "I always order from here, quality is amazing!", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 4, name: "Michael Smith", role: "Foodie", message: "Highly reliable and fast service. Very satisfied.", image: "https://randomuser.me/api/portraits/men/33.jpg" },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div onClick={onClick}
       className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-green-600 shadow-lg text-white p-3 rounded-full cursor-pointer hover:bg-green-700 hover:scale-110 transition">
    <FaArrowRight size={16}/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}
       className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-green-600 shadow-lg text-white p-3 rounded-full cursor-pointer hover:bg-green-700 hover:scale-110 transition">
    <FaArrowLeft size={16}/>
  </div>
);

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3800,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 768, settings: { slidesToShow: 1 }}
    ]
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
          What Our Customers Say
        </h1>

        <Slider {...settings} className="relative">
          {testimonials.map(t => (
            <div key={t.id} className="p-4">
              <div className="bg-linear-to-r from-green-50 via-white to-green-50 backdrop-blur-xl border border-gray-200 shadow-md rounded-2xl p-7 
                            flex flex-col items-center text-center transition hover:scale-[1.06] duration-300 hover:shadow-2xl">
                
                <img src={t.image} alt={t.name}
                     className="w-20 h-20 rounded-full mb-4 border-4 border-green-500 shadow-md" />

                <p className="text-gray-700 text-sm sm:text-base italic mb-4 leading-relaxed">
                  "{t.message}"
                </p>

                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                <span className="text-sm text-green-600 font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}

export default Testimonials;
