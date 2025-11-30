import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Wishlist() {
  const wishlistItems = [
    // {
    //   id: 1,
    //   name: "Fresh Apples",
    //   price: 120,
    //   image: "https://via.placeholder.com/150",
    // },
    // {
    //   id: 2,
    //   name: "Organic Rice 1kg",
    //   price: 85,
    //   image: "https://via.placeholder.com/150",
    // },
    // {
    //   id: 3,
    //   name: "Full Cream Milk",
    //   price: 65,
    //   image: "https://via.placeholder.com/150",
    // },
  ];

  return (
    <div className="w-full py-8 flex justify-center h-[70vh] bg-gray-50">
      <div className="max-w-6xl w-full px-4">

        {/* Page Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-5">My Wishlist ❤️</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-600 text-center py-10 text-lg">
            Your wishlist is empty 🛍
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-md mb-3"
                />

                <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">৳ {item.price}</p>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-3">

                  {/* Add to cart */}
                  <button className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700 transition">
                    <FaShoppingCart size={12} />
                    Add to Cart
                  </button>

                  {/* Remove */}
                  <button className="text-red-600 hover:text-red-700">
                    <FaTrashAlt size={16} />
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
