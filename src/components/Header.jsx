import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const headerData = [
  {
    url: '/headerImg.jpg', // Assuming a local file for this example
    alt: 'Stylish Clothing Collection',
    heading: 'Discover Your Style',
    bgColor: '#F2F0F1',
    description:
      'Explore the latest trends in fashion with our handpicked collection of clothing and accessories. Unleash your style and express yourself with confidence.',
  },
  {
    url: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Elegant Dress Collection',
    heading: 'New Arrivals',
    bgColor: '#dadada',
    description:
      'Be the first to shop our exclusive new arrivals. From chic dresses to casual wear, find the perfect outfit for any occasion.',
  },
  {
    url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Men’s Sale Items',
    heading: 'Seasonal Sale',
    bgColor: '#dadada',
    description:
      'Don’t miss out on amazing discounts this season. Shop the latest deals on men’s apparel and accessories while supplies last.',
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % headerData.length);
        setIsFading(false);
      }, 500); // Match this duration with the CSS fade-out duration
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundColor: headerData[currentSlide].bgColor }}
      className="h-[100vh] w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-10 transition-colors duration-1000 overflow-hidden"
    >
      {/* Left Section */}
      <div
        className={`flex flex-col justify-center space-y-6 transition-opacity duration-500 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="uppercase font-extrabold tracking-tighter sm:text-2xl md:text-6xl text-gray-800">
          {headerData[currentSlide].heading}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          {headerData[currentSlide].description}
        </p>
        <button 
        onClick={()=> navigate('/products')}
        className="px-12 py-3 w-fit bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div
        className={`w-full relative h-full transition-opacity duration-500 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={headerData[currentSlide].url}
          alt={headerData[currentSlide].alt}
          className="h-full w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
