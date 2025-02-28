import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { ProductsData } from "../utils/data";
import { useDispatch } from "react-redux";
import { addToCart } from '../store/CartSlice/CartSlice.js';

const DetailedProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    size: "",
    quantity: 1,
    color: "",
  });

  // Fetch product data based on id
  const fetchProduct = useCallback(() => {
    const detailedProduct = ProductsData.find((item) => item.id === parseInt(id));
    setProductData(detailedProduct || null);
  }, [id]);

  useEffect(() => {
    fetchProduct();
    window.scrollTo(0, 0);
  }, [fetchProduct]);

  // Fetch related products
  useEffect(() => {
    if (productData?.category) {
      const relatedProductsList = ProductsData.filter(
        (item) => item.category === productData.category && item.id !== productData.id
      ).slice(0, 3);
      setRelatedProducts(relatedProductsList);
    }
  }, [productData]);

  const handleOptionChange = (key, value) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleQuantityChange = (type) => {
    setSelectedOptions((prev) => ({
      ...prev,
      quantity: type === "increase" ? prev.quantity + 1 : Math.max(1, prev.quantity - 1),
    }));
  };

  const handleAddToCart = () => {
    if (!selectedOptions.size || !selectedOptions.color) {
      alert("Please select a size and color before adding to cart.");
      return;
    }
    dispatch(addToCart({ ...productData, ...selectedOptions }));
  };

  return (
    <div className="p-6 md:p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex gap-5">
            <div className="flex flex-col justify-around">
              {[...Array(2)].map((_, index) => (
                <img
                  key={index}
                  src={productData?.image || "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt={productData?.name || "Product image"}
                  width={200}
                  height={200}
                  className="rounded-lg ms-4 border border-black"
                />
              ))}
            </div>
            <div className="flex items-center">
              <img
                src={productData?.image || "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt={productData?.name || "Product image"}
                width={500}
                height={500}
                className="rounded-lg border"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{productData?.name || "Product Name"}</h1>
            <p className="text-gray-600 text-base">{productData?.description || "No description available."}</p>
            <p className="text-lg font-semibold text-gray-800">
              Price: <span className="text-green-600">${productData?.price || "N/A"}</span>
            </p>

            {/* Color Selection */}
            <h5 className="font-medium text-lg">Select Color:</h5>
            <div className="flex gap-3">
              {productData?.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => handleOptionChange("color", color)}
                  className={`rounded-md px-5 py-3 border border-black ${selectedOptions.color === color ? "bg-gray-800 text-white" : ""}`}
                >
                  {color}
                </button>
              ))}
            </div>

            {/* Size Selection */}
            <h5 className="font-medium text-lg">Choose Size:</h5>
            <div className="flex flex-wrap gap-3">
              {productData?.sizes?.map((size) => (
                <span
                  key={size}
                  onClick={() => handleOptionChange("size", size)}
                  className={`px-12 py-2 text-sm border rounded-lg text-gray-700 cursor-pointer hover:bg-gray-800 hover:text-white ${selectedOptions.size === size ? "bg-gray-800 text-white" : ""}`}
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Quantity Selection */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button onClick={() => handleQuantityChange("decrease")} className="px-3 py-1 bg-gray-300 text-lg font-semibold rounded">-</button>
                <span className="text-lg font-semibold">{selectedOptions.quantity}</span>
                <button onClick={() => handleQuantityChange("increase")} className="px-3 py-1 bg-gray-300 text-lg font-semibold rounded">+</button>
              </div>
              <button onClick={handleAddToCart} className="px-6 py-3 bg-black text-white font-medium rounded-lg">Add to Cart</button>
            </div>

            {/* Product Details */}
            <div className="text-sm text-gray-600 space-y-1">
              {["Reviews", "Rating", "Category", "Brand", "Availability", "Date Added", "Last Updated", "Shipping"].map((field) => (
                <p key={field}>{field}: {productData?.[field.toLowerCase()] || "N/A"}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="w-[80%] m-auto mt-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">You might also like</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts?.map((product) => (
            <Card key={product.id} id={product.id} url={product.image} headings={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProductPage;
