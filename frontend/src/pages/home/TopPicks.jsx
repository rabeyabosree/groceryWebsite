import React from 'react';
import ProductCard from '../../components/ProductCard';
import { groceryProducts } from '../../data/data';
import { useNavigate } from 'react-router-dom';

function TopPicks() {
    const navigate = useNavigate()
  // extract example top picks products (11th to 20th)
  const toppicksProducts = groceryProducts.slice(10, 20);

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-3">

      {/* Heading */}
      <h1 className="text-lg sm:text-xl font-semibold mb-4">
        TopPicks Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 px-0">
        {toppicksProducts.map((item) => (
          <ProductCard
            key={item.id}
            onclick={() => navigate(`/shops/${item.id}`)}
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

export default TopPicks;
