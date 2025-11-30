import React from 'react'
import { groceryProducts } from '../../data/data'
import ProductCard from '../../components/ProductCard'
import { useNavigate } from 'react-router-dom';

function FeaturedProducts() {
  const navigate = useNavigate()
  const featuredProducts = groceryProducts.slice(0, 10)

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-3">

      {/* Heading */}
      <h1 className="text-lg sm:text-xl font-semibold mb-4">
        Featured Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {featuredProducts.map((item) => (
          <ProductCard
            onclick={() => navigate(`/shops/${item.id}`)}
            key={item.id}
            image={item.image}
            variants={item.variants}
            name={item.name}
            rating={item.rating}
            sold={item.sold}
            love={item.love}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
