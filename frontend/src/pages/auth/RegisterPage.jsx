import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-100 px-4">

      {/* Form Card */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg">

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-1">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Join us and shop fresh groceries everyday 🛒
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-semibold block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:border-green-600 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:border-green-600 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold block mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:border-green-600 text-sm"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded-lg">
            Register
          </button>

        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterPage;
