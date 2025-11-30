import React, { useState } from "react";

function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Organic Hilsha Fish",
      image: "https://via.placeholder.com/120",
      quantity: 1,
      selectedWeight: "1kg",
      weights: [
        { weight: "500g", price: 42 },
        { weight: "1kg", price: 78 },
        { weight: "2kg", price: 155 },
      ],
    },
    {
      id: 2,
      title: "Fresh Apple",
      image: "https://via.placeholder.com/120",
      quantity: 2,
      selectedWeight: "1kg",
      weights: [
        { weight: "500g", price: 60 },
        { weight: "1kg", price: 115 },
        { weight: "2kg", price: 220 },
      ],
    },
  ];

  const [items, setItems] = useState(cartItems);
  const [openItemId, setOpenItemId] = useState(null);

  const handleWeightSelect = (itemId, weight) => {
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, selectedWeight: weight } : item
      )
    );
    setOpenItemId(null);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Cart Items */}
        <div className="flex-1 space-y-6">
          {items.map(item => {
            const selected = item.weights.find(w => w.weight === item.selectedWeight);
            const isOpen = openItemId === item.id;

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-20 h-20 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-medium text-lg">{item.title}</h2>

                  {/* Clickable Weight Selector */}
                  <div className="relative mt-2 w-full sm:w-36">
                    <button
                      onClick={() =>
                        setOpenItemId(openItemId === item.id ? null : item.id)
                      }
                      className="w-full px-3 py-2 text-sm border rounded-md flex justify-between items-center hover:border-green-500 transition"
                    >
                      {item.selectedWeight} - ৳{selected.price}
                      <span
                        className={`ml-2 transform transition ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-full sm:w-36 bg-white border rounded-md shadow-lg z-10">
                        {item.weights.map(w => (
                          <button
                            key={w.weight}
                            onClick={() => handleWeightSelect(item.id, w.weight)}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-green-100 transition ${
                              item.selectedWeight === w.weight ? "bg-green-200 font-semibold" : ""
                            }`}
                          >
                            {w.weight} - ৳{w.price}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 mt-3">
                    <button className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200">-</button>
                    <span>{item.quantity}</span>
                    <button className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200">+</button>
                  </div>
                </div>

                <div className="text-right mt-3 sm:mt-0">
                  <p className="font-semibold text-green-600 text-lg">
                    ৳{selected.price * item.quantity}
                  </p>
                  <button className="text-xs text-gray-400 hover:text-red-500 mt-1">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right - Order Summary */}
        <div className="bg-gray-50 rounded-xl p-6 w-full lg:w-1/3 h-fit">
          <h2 className="text-xl font-semibold mb-5">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>
                ৳
                {items.reduce(
                  (acc, item) =>
                    acc + item.weights.find(w => w.weight === item.selectedWeight).price * item.quantity,
                  0
                )}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Fee</span>
              <span>৳50</span>
            </p>
          </div>
          <hr className="my-4" />
          <p className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>
              ৳
              {items.reduce(
                (acc, item) =>
                  acc + item.weights.find(w => w.weight === item.selectedWeight).price * item.quantity,
                0
              ) + 50}
            </span>
          </p>
          <button className="w-full mt-4 py-3 rounded-lg bg-black text-white hover:opacity-80 transition font-medium">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
