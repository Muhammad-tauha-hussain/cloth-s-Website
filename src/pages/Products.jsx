import React, { useEffect, useState } from "react";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"; 
import { ProductsData } from "../utils/data"; 
import { useDispatch } from "react-redux";
import { getAllProducts } from "../store/ProductSlice/ProductSlice";

const Products = () => {
  const dispatch = useDispatch()
  const [price, setPrice] = useState(50); 
  const [filteredProducts, setFilteredProducts] = useState(ProductsData); 

  const filterProductsFunc = (filtered) => {
    const filterItems = ProductsData.filter((item) => {
      const isCategoryMatch = item.category.toLowerCase() === filtered.toLowerCase();
      const isSizeMatch = item.sizes.some((size) => size.toLowerCase() === filtered.toLowerCase());
      return isCategoryMatch || isSizeMatch;
    });
    setFilteredProducts(filterItems);
  };


  useEffect(()=>{
    dispatch(getAllProducts(ProductsData));
  },[])
  return (
    <div>
      <Navbar/>
    <div className="w-[90%] mx-auto mb-20 mt-5 flex gap-5">
      {/* Filter Sidebar */}
      <div className="w-full md:w-1/3 border rounded-lg shadow-lg p-4 h-fit bg-white">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <span className="text-lg font-semibold text-gray-800">Filter</span>
          <FaFilter className="text-gray-500" />
        </div>

        {/* Categories */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Categories</h5>
          <ul className="space-y-2">
            {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((item, idx) => (
              <li
                onClick={() => filterProductsFunc(item)}
                key={idx}
                className="flex justify-between items-center text-gray-700 hover:text-black cursor-pointer"
              >
                <span>{item}</span>
                <FaArrowRight />
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6" />

        {/* Price Range */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Price</h5>
          <div className="flex items-center justify-between text-sm">
            <span>${50}</span>
            <span>${200}</span>
          </div>
          <input
            type="range"
            min={50}
            max={200}
            step={1}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-gray-800 mt-2"
          />
          <p className="text-center text-gray-700 mt-2">
            Selected Price: <span className="font-semibold">${price}</span>
          </p>
        </div>

        <hr className="my-6" />

        {/* Colors */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Colors</h5>
          <div className="flex flex-wrap gap-4">
            {[
              "bg-green-500",
              "bg-red-600",
              "bg-yellow-500",
              "bg-orange-500",
              "bg-blue-600",
              "bg-purple-500",
              "bg-black",
              "bg-blue-300",
              "bg-pink-500",
              "border border-black bg-white",
            ].map((colorClass, idx) => (
              <div
                key={idx}
                className={`w-8 h-8 rounded-full ${colorClass} cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>

        <hr className="my-6" />

        {/* Sizes */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Size</h5>
          <div className="flex flex-wrap gap-3">
            {["XX-S", "X-S", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((size, idx) => (
              <span
                onClick={() => filterProductsFunc(size)}
                key={idx}
                className="px-6 py-3 text-sm border rounded-lg text-gray-700 hover:bg-gray-800 hover:text-white cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <hr />
      </div>

      {/* Product Grid */}
      <div className="w-full md:w-2/3">
        {filteredProducts.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-center text-3xl text-gray-700">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredProducts.map((item) => (
              <Card key={item.id} url={item.image} headings={item.name} id={item.id} price={item.price} />
            ))}
          </div>
        )}
      </div>
    </div>

        <Footer/>
    </div>
  );
};

export default Products;
