import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-green-500 mb-3">GroceryHub</h1>
          <p className="text-sm text-gray-400">
            Fresh groceries delivered to your doorstep. Quality products, great service, and unbeatable prices.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition flex items-center justify-center">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition flex items-center justify-center">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition flex items-center justify-center">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition flex items-center justify-center">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Shop</a></li>
            <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Categories</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-green-500 transition">Fruits & Vegetables</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Dairy & Eggs</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Rice & Grains</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Snacks & Beverages</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Spices & Oils</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get latest updates and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 placeholder:text-gray-300 rounded-md focus:outline-none text-gray-200 w-full"
            />
            <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GroceryHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
