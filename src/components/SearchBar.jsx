import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/SearchSlice/SearchSlice';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("")
  const dispatch = useDispatch()
  const handleInput = (value) => {
    setData(value);
    // console.log(data);
    // dispatch(setSearchQuery(data));
  }
  useEffect(()=>{
    dispatch(setSearchQuery(data))
    navigate('/products')
  },[data])
  return (
    <div className="hidden  lg:flex items-center bg-gray-100 rounded-full px-3 py-2 w-full max-w-xs shadow-sm ">
      <IoSearch className="text-gray-500 text-lg" />
      <input
      onChange={(e) => handleInput(e.target.value)}
        type="text"
        placeholder="Search for products..."
        className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
      />
    </div>
  );
};

export default SearchBar;
