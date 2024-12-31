import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  // Navigation links array
  const navLinks = [
    { href: '/products', label: 'Shop', hasDropdown: true },
    { href: '/commingSoon', label: 'On Sale' },
    { href: '/commingSoon', label: 'New Arrival' },
    { href: '/commingSoon', label: 'Brands' },
  ];

  return (
    <div className="w-full bg-white shadow-md">
      {/* Navbar Container */}
      <div className="w-full px-5 md:px-10 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800">SHOP.CO</h1>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden sm:flex md:space-x-6 text-gray-800 font-bold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-gray-900 flex gap-1 items-center">
                  {link.label}
                  {link.hasDropdown && <RiArrowDropDownLine className="text-2xl" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="sm:hidden text-3xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* SearchBar Component Placeholder */}
          <div className="border border-gray-300 px-4 py-2 rounded-md">Search</div>
          <button onClick={()=> navigate('/cart')}>
          <CiShoppingCart className="text-3xl text-gray-800 cursor-pointer hover:text-gray-900" />
          </button>
          <CgProfile className="text-3xl text-gray-800 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-bold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-gray-900 flex gap-1 items-center">
                  {link.label}
                  {link.hasDropdown && <RiArrowDropDownLine className="text-2xl" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
