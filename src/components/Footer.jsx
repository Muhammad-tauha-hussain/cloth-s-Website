import React from "react";
import { MdEmail } from "react-icons/md";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

const Footer = () => {
  return (
    <div className="relative w-full py-20 bg-gray-100">
      {/* Footer Content */}
      <div className="absolute -top-20 sm:-top-12 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 items-center w-[90%] max-w-6xl rounded-2xl bg-black text-white p-8 gap-8 shadow-lg">
        {/* Left Section */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold mb-4">
            Stay up-to-date with our latest offers
          </h1>
          <p className="text-gray-400 text-sm">
            Subscribe to our newsletter and never miss an update!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="flex items-center w-full sm:w-auto bg-white px-4 py-3 rounded-lg text-gray-400 border border-gray-600">
            <MdEmail className="text-xl mr-2" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full focus:outline-none text-black placeholder-black"
            />
          </label>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg transition-all w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Spacer for newsletter */}
      <div className="h-32 sm:h-20"></div>

      {/* Links and Social Section */}
      <div className="grid grid-cols-1 mt-32 md:grid-cols-2 lg:grid-cols-5 gap-8 w-[90%] mx-auto text-black py-8 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">SHOP.CO</h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quae vero, dicta illo ad ducimus
            voluptatem saepe. Labore quidem facilis temporibus voluptas.
          </p>
          <div className="flex gap-6 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <CiTwitter className="text-gray-700 cursor-pointer transition hover:text-blue-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <CiFacebook className="text-gray-700 cursor-pointer transition hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <CiInstagram className="text-gray-700 cursor-pointer transition hover:text-pink-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-700 cursor-pointer transition hover:text-gray-900" />
            </a>
          </div>
        </div>

        <div>
          <h1 className="font-semibold">Company</h1>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Features
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Work
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Help</h1>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/support" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">FAQ</h1>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/accounts" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Accounts
              </Link>
            </li>
            <li>
              <Link to="/returns" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/payment-methods" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Payment Methods
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">Resources</h1>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/blog" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/press" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Press
              </Link>
            </li>
            <li>
              <Link to="/press-releases" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Press Releases
              </Link>
            </li>
            <li>
              <Link to="/affiliate-program" className="text-gray-700 cursor-pointer transition hover:text-blue-500">
                Affiliate Program
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 text-center text-gray-700 mt-8">
        <p>&copy; 2024 SHOP.CO - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
