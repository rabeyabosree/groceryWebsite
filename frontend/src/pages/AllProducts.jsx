import React, { useState } from "react";
import { groceryProducts } from "../data/data";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(200);

  // unique categories
  const allCategories = ["All", ...new Set(groceryProducts.map(item => item.category))];

  // show limit 5 — see more click = full show
  const visibleCategories = showMore ? allCategories : allCategories.slice(0, 5);

  // Extract lowest price from variants [{weight, price}]
  const getLowestPrice = (variants) => {
    return Math.min(...variants.map(v => v.price));
  };

  // Filtering
  const filteredProducts = groceryProducts.filter(item => {
    const lowestPrice = getLowestPrice(item.variants);

    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      lowestPrice <= priceRange
    );
  });

  return (
    <div className="w-full py-6">
      <div className="max-w-7xl mx-auto flex gap-5 px-3">

        {/* Sidebar (Desktop) */}
        <div className="hidden md:block w-64 bg-white shadow-lg rounded-lg p-4 h-fit">

          <h2 className="text-lg font-semibold mb-4">Filter Products</h2>

          {/* Category */}
          <h3 className="font-medium mb-2 text-gray-700">Categories</h3>
          <div className="space-y-2">
            {visibleCategories.map(cat => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* SEE MORE / LESS */}
          {allCategories.length > 5 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-green-600 text-sm underline"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          )}

          {/* Price Filter */}
          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
            <input
              type="range"
              min="10"
              max="2000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-green-600"
            />
            <p className="text-sm text-gray-500 mt-1">
              Up to: <span className="font-semibold text-green-700">${priceRange}</span>
            </p>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        <details className="md:hidden bg-white shadow rounded-lg p-4 mb-3">
          <summary className="font-semibold text-gray-800 cursor-pointer">Filter Products</summary>

          <div className="mt-3">
            {/* Category buttons */}
            <h3 className="text-sm font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {visibleCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedCategory === cat ? "bg-green-600 text-white" : "border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* See More mobile */}
            {allCategories.length > 5 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-green-600 text-xs mt-2 underline"
              >
                {showMore ? "See Less" : "See More"}
              </button>
            )}

            {/* Price */}
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="10"
                max="2000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-green-600"
              />
            </div>
          </div>
        </details>

        {/* Products Section */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-3">All Products</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(item => (
                <ProductCard
                  key={item.id}
                  onclick={() => navigate(`/shops/${item.id}`)}
                  image={item.image}
                  variants={item.variants}
                  name={item.name}
                  rating={item.rating}
                  sold={item.sold}
                />
              ))
            ) : (
              <p className="col-span-full text-center py-10 text-gray-600">
                No products found 😕
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
