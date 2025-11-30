import React from 'react'
import { groceryProducts } from '../data/data'
import { Link } from 'react-router-dom'

function CategoryCard() {

  const categories = Array.from(
    new Map(groceryProducts.map(item => [item.category, item])).values()
  );

  return (
    <div className="w-full py-6 flex justify-center">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="flex justify-between items-center px-4">
          <h1 className="text-base sm:text-lg font-bold">Categories</h1>
          <Link 
            to="/categories" 
            className="text-green-600 text-sm sm:text-base font-semibold hover:underline"
          >
            See All →
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="
          grid grid-cols-3 
          sm:grid-cols-4 md:grid-cols-6 
          gap-3 sm:gap-4 md:gap-5 
          mt-4 px-3
        ">
          {categories.slice(0,6).map((cat,i) => (
            <Link to={`/products?category=${cat.category}`} key={i}>
              <div className="
                bg-white rounded-xl overflow-hidden shadow-sm 
                hover:shadow-md hover:scale-105 
                transition transform duration-200 cursor-pointer
              ">
                <img 
                  src={cat.image} 
                  alt={cat.category}
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
                <h2 className="py-2 text-xs sm:text-sm font-semibold text-center">
                  {cat.category}
                </h2>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CategoryCard
