import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100 px-4">

      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          We're happy to see you again 👋
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm font-semibold mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:border-green-600 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:border-green-600 text-sm"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-green-600 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition">
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
