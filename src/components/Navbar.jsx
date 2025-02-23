import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItemsLength = useSelector((state)=> state.Cart.items.length)
  useEffect(()=>{
    console.log(cartItemsLength);
    
  },[cartItemsLength])
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation links array
  const navLinks = [
    { href: "/products", label: "Shop", hasDropdown: false },
    { href: "/commingSoon", label: "On Sale" },
    { href: "/commingSoon", label: "New Arrival" },
    { href: "/commingSoon", label: "Brands" },
  ];

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="hover:text-gray-900 flex gap-1 items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <RiArrowDropDownLine className="text-2xl" />
                  </button>
                ) : (
                  <Link to={link.href} className="hover:text-gray-900">
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && dropdownOpen && (
                  <ul className="absolute left-0 top-8 bg-white shadow-md w-32 rounded-md">
                    <li>
                      <Link
                        to="/category1"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Category 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category2"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Category 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="sm:hidden text-3xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex  items-center space-x-4">
          {/* Search Icon for Small Screens */}
          <button className="sm:hidden text-2xl text-gray-800 focus:outline-none">
            <CiSearch />
          </button>

          {/* Search Input for Larger Screens */}
          <SearchBar />

          {/* Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="relative flex items-center gap-2"
          >
            <CiShoppingCart className="text-3xl text-gray-800 cursor-pointer hover:text-gray-900" />
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemsLength}
            </span>
          </button>

          {/* Profile Link */}
          <Link to="/login">
            <CgProfile className="text-2xl text-gray-800 cursor-pointer hover:text-gray-900" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-gray-900 flex gap-1 items-center"
                  onClick={() => setMenuOpen(false)}
                >
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
