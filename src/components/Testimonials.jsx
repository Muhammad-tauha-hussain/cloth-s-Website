import React from "react";
import { FaRegStar } from "react-icons/fa";

const Testimonials = ({ name, review }) => {
  return (
    <div className="w-80 min-w-[320px] border border-gray-300 bg-white shadow-md rounded-lg px-6 py-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>

      {/* Name */}
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>

      {/* Review */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {review}{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Read more...
        </a>
      </p>
    </div>
  );
};

export default Testimonials;
