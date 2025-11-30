import React, { useState } from 'react';
import { groceryProducts } from '../../data/data';
import TopPicks from './TopPicks';

const categories = [...new Map(
  groceryProducts.map(item => [item.category, { category: item.category, image: item.image }])
).values()];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-3">All Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => setSelectedCategory(cat.category)}
              className={`cursor-pointer rounded-lg overflow-hidden border
                ${selectedCategory === cat.category ? "border-green-500 scale-[1.05]" : "border-gray-200"}
                hover:shadow-md transition transform`}
            >
              <img src={cat.image} alt={cat.category} className="h-24 w-full object-cover" />
              <p className="text-center py-2 font-semibold text-sm">{cat.category}</p>
            </div>
          ))}

        </div>
      </div>

      <TopPicks />
    </div>
  );
}

export default Categories;
