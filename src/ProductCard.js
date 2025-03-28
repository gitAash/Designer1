import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment)); // Prevents quantity from going below 1
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.price}</p>
      <div className="flex items-center space-x-4">
        {/* Quantity Control */}
        <button
          className="bg-gray-200 px-2 py-1 rounded text-gray-700"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 px-2 py-1 rounded text-gray-700"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>

        {/* Cart Icon and Add to Cart Button */}
        <div className="ml-auto flex items-center space-x-2">
          <button className="text-blue-500 text-xl">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
