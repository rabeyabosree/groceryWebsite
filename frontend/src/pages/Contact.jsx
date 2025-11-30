import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            We are here to assist you with any questions or information you need.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FORM SECTION */}
          <div className="bg-white backdrop-blur-lg shadow-lg rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="p-3 bg-gray-50 border rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="p-3 bg-gray-50 border rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium text-sm">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="p-3 bg-gray-50 border rounded-lg focus:border-green-600 focus:outline-none"
                ></textarea>
              </div>

              <button className="w-full py-3 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition text-sm md:text-base">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO + MAP */}
          <div className="flex flex-col gap-6">

            {/* Contact Details */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Details</h2>

              <div className="space-y-4 text-gray-600 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-green-600 text-lg" />
                  <span>support@groceryhub.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-600 text-lg" />
                  <span>+880 1750 123 456</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-green-600 text-lg" />
                  <span>Banani, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                className="w-full h-72 md:h-80"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.550799983405!2d90.40310387622366!3d23.798327387515258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70a9fbd4d7d%3A0xa2f2bd52f03ccc79!2sDhaka!5e0!3m2!1sen!2sbd!4v1701012345678">
              </iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
