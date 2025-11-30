import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Logo from "./Logo";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shops", path: "/shops" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">

      {/* 🔹 Top Row → Logo left, Icons + Search right */}
      <div className="max-w-[1300px] mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Logo />

        {/* Search (Desktop Only) */}
        <div className="hidden md:block w-[300px]">
          <SearchBar />
        </div>

        {/* Icons + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition"
            onClick={() => navigate("/wishlist")}
          >
            <IoMdHeartEmpty className="text-xl" />
            <div className="leading-4 hidden md:block">
              <p className="text-xs text-gray-500">Wishlist</p>
              <p className="text-sm font-semibold">My Home</p>
            </div>
          </div>

          {/* Account */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition"
            onClick={() => navigate("/register")}
          >
            <CiUser className="text-xl" />
            <div className="leading-4 hidden md:block">
              <p className="text-xs text-gray-500">Sign in</p>
              <p className="text-sm font-semibold">Account</p>
            </div>
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition relative"
          >
            <FiShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[9px] px-[5px] rounded-full">
              0
            </span>
            <div className="leading-4 hidden md:block">
              <p className="text-xs text-gray-500">Cart</p>
              <p className="text-sm font-semibold">$0.000</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-2xl"
          >
            {openMenu ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* 🔸 Second Row → Menu centered, notifications/messages both sides */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          {/* Left Notifications */}
          <div className="hidden md:flex text-sm gap-2">
            <span className="bg-green-600 px-2 py-1 rounded">New Offer!</span>
            <span className="bg-green-600 px-2 py-1 rounded">Free Delivery</span>
          </div>

          {/* Center Menu */}
          <nav className="flex-1 flex justify-center gap-6 font-medium text-white">
            {navLinks.map((m) => (
              <a
                key={m.name}
                href={m.path}
                className="hover:text-yellow-300 transition"
              >
                {m.name}
              </a>
            ))}
          </nav>

          {/* Right Notifications */}
          <div className="hidden md:flex text-sm gap-2">
            <span className="bg-green-600 px-2 py-1 rounded">Hot Deals</span>
            <span className="bg-green-600 px-2 py-1 rounded">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {openMenu && (
        <div className="md:hidden px-4 pb-3 bg-white shadow-md">
          {/* Mobile Search */}
          <SearchBar />

          {/* Mobile Menu Links */}
          <nav className="flex flex-col mt-3 gap-1">
            {navLinks.map((m) => (
              <a
                key={m.name}
                href={m.path}
                className="px-5 py-3 text-gray-700 font-medium hover:bg-green-100 rounded"
              >
                {m.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
