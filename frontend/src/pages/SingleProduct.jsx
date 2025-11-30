import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { groceryProducts } from '../data/data';
import { BsFillStarFill } from "react-icons/bs";
import FeaturedProducts from './home/FeaturedProducts';

function SingleProduct() {
  const { id } = useParams();

  // Find the product
  const product = groceryProducts.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || {});

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">Product not found!</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 sm:h-[400px] object-contain bg-white rounded-xl shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Title & Category */}
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <p className="text-green-700 font-semibold">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-yellow-500 font-semibold flex items-center gap-1">
              <BsFillStarFill /> {product.rating}
            </span>
            <span className="text-gray-500">({product.sold} sold)</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-2">{product.desc}</p>

          {/* Variant Selection */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">Select Quantity:</h2>
            <div className="flex gap-2 flex-wrap">
              {product.variants.map((v, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 border rounded-md text-sm hover:border-green-500 transition ${
                    selectedVariant.weight === v.weight
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {v.weight} - ৳{v.price}
                </button>
              ))}
            </div>
          </div>

          {/* Stock & Add to Cart */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <span className="text-gray-600 font-medium">Stock: {product.stock}</span>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold">
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-12">
        <FeaturedProducts />
      </div>
    </section>
  );
}

export default SingleProduct;
