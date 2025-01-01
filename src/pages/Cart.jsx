import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../store/CartSlice/CartSlice.js';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.items);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle item removal
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, operation) => {
    dispatch({ type: "UPDATE_CART_ITEM_QUANTITY", payload: { id, operation } });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[90%] mx-auto min-h-screen mt-10 sm:mt-5">
        {/* Breadcrumb */}
        <div className="flex gap-2 mb-5 text-sm">
          <Link to="/" className="flex gap-1 items-center text-black hover:underline">
            Home <FaArrowRight />
          </Link>
          <span className="text-gray-500">Cart</span>
        </div>

        <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

        <div className="flex flex-wrap justify-between gap-5">
          {/* Left Section: Cart Items */}
          <div className="w-full lg:w-[58%] border rounded-md p-5 space-y-5">
            {cartItems?.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item?.id}
                  className="flex flex-col sm:flex-row gap-5 items-center border-b pb-5 last:border-none"
                >
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-start w-full">
                    {/* Product Details */}
                    <div className="space-y-2">
                      <h1 className="text-lg font-semibold">{item?.name}</h1>
                      <p className="text-sm text-gray-600">Size: {item?.size || "N/A"}</p>
                      <p className="text-sm text-gray-600">Color: {item?.color || "N/A"}</p>
                      <h5 className="text-lg font-bold text-black">
                        ${item?.price}
                      </h5>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:gap-28 gap-5">
                      <MdDelete
                        className="text-red-600 text-2xl cursor-pointer hover:text-red-800"
                        onClick={() => handleRemoveItem(item)}
                      />
                      <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full space-x-3">
                        <button
                          className="text-gray-600 hover:text-black"
                          onClick={() => handleQuantityChange(item.id, "decrement")}
                        >
                          -
                        </button>
                        <p className="font-semibold">{item.quantity}</p>
                        <button
                          className="text-gray-600 hover:text-black"
                          onClick={() => handleQuantityChange(item.id, "increment")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>

          {/* Right Section: Summary */}
          <div className="w-full lg:w-[38%] border rounded-md p-5">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm font-semibold">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-600">Shipping:</span>
              <span className="text-sm font-semibold">$10.00</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">
                ${calculateTotal() + 10}
              </span>
            </div>
            <button className="mt-5 w-full bg-black text-white py-2 rounded-md hover:bg-gray-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
