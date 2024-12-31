import React from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="hidden  lg:flex items-center bg-gray-100 rounded-full px-3 py-2 w-full max-w-xs shadow-sm ">
      <IoSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search for products..."
        className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
      />
    </div>
  );
};

export default SearchBar;
