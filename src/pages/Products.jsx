import React, { useEffect, useState } from "react";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import { ProductsData } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductSlice/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.search.query);

  // Local states for filtering
  const [price, setPrice] = useState(50);
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);
  const [showCategories, setShowCategories] = useState(false);

  // Function to filter products by category or size while keeping the price filter active
  const filterProductsFunc = (filtered) => {
    const filterItems = ProductsData.filter((item) => {
      const isCategoryMatch = item.category.toLowerCase() === filtered.toLowerCase();
      const isSizeMatch = item.sizes.some((size) => size.toLowerCase() === filtered.toLowerCase());
      const isPriceMatch = item.price <= price; // Keep products within the selected price range
      return (isCategoryMatch || isSizeMatch) && isPriceMatch;
    });
    setFilteredProducts(filterItems);
    setShowCategories(false);
  };

  // Dispatch an action to store all products (if needed)
  useEffect(() => {
    dispatch(getAllProducts(ProductsData));
  }, [dispatch]);

  // useEffect to update filtered products based on search query and price range
  useEffect(() => {
    let searchFilteredProducts = ProductsData.filter(
      (product) =>
        product.price <= price && // Filter by price
        (searchItem.trim() === "" ||
          product.name.toLowerCase().includes(searchItem.toLowerCase()))
    );
    setFilteredProducts(searchFilteredProducts);
  }, [searchItem, price]);

  return (
    <div>
      <div className="md:hidden w-full flex justify-center my-4">
        <button
          onClick={() => setShowCategories(true)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md"
        >
          Select Category
        </button>
      </div>

      <div className="w-[90%] mx-auto mb-20 mt-5 flex flex-col md:flex-row gap-5">
        {/* Filter Sidebar */}
        <div
          className={`fixed md:relative bg-white w-full md:w-1/3 border rounded-lg shadow-lg p-4 h-fit z-50 transition-all duration-300 ${
            showCategories ? "top-0 left-0 h-full" : "hidden md:block"
          }`}
        >
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <span className="text-lg font-semibold text-gray-800">Filter</span>
            <FaFilter className="text-gray-500" />
          </div>

          {/* Close Button for Mobile */}
          <button
            onClick={() => setShowCategories(false)}
            className="md:hidden absolute top-4 right-4 text-gray-700 text-xl"
          >
            ✕
          </button>

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
          {/* <div>
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
          </div> */}

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
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-2/3">
          {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-center text-3xl text-gray-700">
                No products found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((item) => (
                <Card
                  key={item.id}
                  url={item.image}
                  headings={item.name}
                  id={item.id}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
