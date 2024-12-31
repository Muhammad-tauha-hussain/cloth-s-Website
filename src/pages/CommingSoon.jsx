import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const CommingSoon = () => {
  return (
    <div>
      <Navbar/>
    
    <div className="flex justify-center items-center text-center w-full h-screen bg-gradient-to-r from-gray-700 via-gray-600 to-blue-900">
      <h1 className="text-4xl sm:text-6xl font-bold text-white animate-bounce">
        Something Big Coming Soon!!!
      </h1>
    </div>
    <Footer/>
    </div>
  );
};

export default CommingSoon;
