import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { groceryProducts } from "../data/data";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const wrapperRef = useRef(null);
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = groceryProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full my-0.5 relative" ref={wrapperRef}>
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm px-2 py-1.5 bg-white hover:shadow-md transition w-full">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search groceries..."
          className="w-full px-3 text-sm outline-none"
          value={query}
          onChange={handleSearch}
        />

        {/* Search Button */}
        <button className="bg-green-600 text-white p-1 rounded-full hover:bg-green-700 transition flex items-center justify-center">
          <CiSearch size={14} />
        </button>
      </div>

      {/* Absolute Search Results */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded shadow max-h-60 overflow-y-auto z-50">
          {results.map((item) => (
            <div
              key={item.id}
              onClick={()=> navigate(`/shops/${item.id}`)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />

              {/* Product Info */}
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>

              {/* Price */}
              <p className="text-green-600 font-bold text-sm">
                ৳ {item.variants[0].price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
