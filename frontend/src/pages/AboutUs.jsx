import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Header Section */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">About GroceryHub</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Your trusted online grocery partner—delivering fresh and quality products
          right at your doorstep.
        </p>
      </section>
      
      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-green-700">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            GroceryHub started with a mission to make grocery shopping easier,
            faster and more reliable. We provide carefully selected products at
            fair prices, ensuring freshness and quality in every order.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            With a dedicated delivery system and customer support, we aim to
            deliver happiness—one bag at a time.
          </p>
        </div>

        <div>
          <img
            src="https://img.freepik.com/free-photo/young-woman-choosing-vegetables-supermarket_1303-21779.jpg"
            alt="About GroceryHub"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>
      </div>

      {/* Mission / Vision */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-100 p-6 text-center rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To make grocery shopping faster, safer and more convenient for every household.
            </p>
          </div>

          <div className="bg-gray-100 p-6 text-center rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be the most reliable online grocery destination by offering the best quality and service.
            </p>
          </div>

          <div className="bg-gray-100 p-6 text-center rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Values</h3>
            <p className="text-gray-600 text-sm">
              Freshness, trust, customer satisfaction and commitment to quality.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10">
          Why Choose GroceryHub?
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg leading-relaxed">
          <li>✔ Always fresh & high-quality products</li>
          <li>✔ Fast delivery at your convenience</li>
          <li>✔ Affordable pricing & offers</li>
          <li>✔ Easy & secure shopping experience</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
