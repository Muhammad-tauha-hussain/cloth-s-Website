import React from "react";
import { MdEmail } from "react-icons/md";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-20 mt-32 ">
      {/* Newsletter Subscription Section */}
      <div className="absolute -top-20 sm:-top-12 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-black text-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            Stay Updated with Our Latest Offers!
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Subscribe to our newsletter and never miss an update.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 ">
          <label className="flex items-center bg-white px-4 py-3 rounded-lg text-gray-400 border border-gray-600 w-full sm:w-auto">
            <MdEmail className="text-xl mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black placeholder-gray-600 focus:outline-none"
            />
          </label>
          <button className="bg-white text-black hover:bg-gray-300 font-semibold px-6 py-3 rounded-lg transition-all w-full sm:w-auto ">
            Subscribe
          </button>
        </div>
      </div>

      {/* Spacer for layout */}
      <div className="h-28 sm:h-20"></div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-[90%] mx-auto py-8">
        {/* Brand Info */}
        <div>
          <h1 className="text-2xl font-bold">SHOP.CO</h1>
          <p className="text-gray-400 text-sm mt-2">
            Your go-to place for the best products. Get amazing deals and quality items delivered to your door.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <CiTwitter className="text-gray-400 hover:text-blue-400 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <CiFacebook className="text-gray-400 hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <CiInstagram className="text-gray-400 hover:text-pink-400 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-gray-200 transition" />
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        {[
          { title: "Company", links: ["About", "Features", "Work", "Careers"] },
          { title: "Help", links: ["Support", "Delivery", "Terms", "Privacy"] },
          { title: "FAQ", links: ["Accounts", "Returns", "Shipping", "Payments"] },
          { title: "Resources", links: ["Blog", "Press", "Releases", "Affiliate"] },
        ].map((section, index) => (
          <div key={index}>
            <h1 className="font-semibold text-lg mb-2">{section.title}</h1>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-blue-400 transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 mt-10">
        <p>&copy; 2024 SHOP.CO - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
