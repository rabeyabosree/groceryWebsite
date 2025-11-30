import React, { useState } from "react";
import SearchBar from "./../SearchBar";
import Logo from "./Logo";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shops", path: "/shops" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">

      {/* 🔹Top Bar*/}
      <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-4 py-3 px-4">

        <Logo />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-2xl"
        >
          {openMenu ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop SearchBar */}
        <div className="hidden md:block w-[45%]">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <IoMdHeartEmpty className="text-xl" onClick={() => navigate('/wishlist')} />
            <div className="leading-4">
              <p className="text-xs text-gray-500">Excellent!</p>
              <p className="text-sm font-semibold">My Home</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <CiUser className="text-xl" />
            <div className="leading-4 " onClick={() => navigate('/register')} >
              <p className="text-xs text-gray-500">Sign in</p>
              <p className="text-sm font-semibold">Account</p>
            </div>
          </div>

          <div onClick={() => navigate('/cart')} className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition relative">
            <FiShoppingCart className="text-xl" />

            <span className="absolute top-[-7px] right-1.5 text-[10px] bg-green-600 text-white px-[5px] rounded-full ">
              0
            </span>

            <div className="leading-4">
              <p className="text-xs text-gray-500">Cart</p>
              <p className="text-sm font-semibold">$0.000</p>
            </div>
          </div>

        </div>
      </div>

      {/* 🔸Mobile SearchBar */}
      {openMenu && (
        <div className="md:hidden px-4 pb-2">
          <SearchBar />
        </div>
      )}

      {/* 🔥 Nav + Offer Row */}
      <div className="bg-[#015321] text-white flex flex-col md:flex-row justify-between items-center text-sm py-3 px-6 gap-2">

        <p>
          Save on winter sale — <span className="text-yellow-500 font-semibold">30% OFF</span>
        </p>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 font-medium">
          {navLinks.map((m) => (
            <a key={m.name} href={m.path} className="hover:text-yellow-400 transition">
              {m.name}
            </a>
          ))}
        </nav>

        <p>
          Delivery within <span className="text-yellow-500 font-semibold">30 min</span>
        </p>
      </div>

      {/* 🔻Mobile nav dropdown */}
      {openMenu && (
        <nav className="md:hidden bg-white border-t shadow-sm flex flex-col py-2">
          {navLinks.map((m) => (
            <a
              key={m.name}
              href={m.path}
              className="px-5 py-2 text-gray-700 font-medium hover:bg-green-100"
            >
              {m.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
