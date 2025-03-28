// src/pages/AddToCart.js
import React from "react";
import { useCart } from "../context/CartContext";

const AddToCart = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen py-8 px-4">
      <h2 className="text-3xl font-semibold text-center">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
              </div>
              <p className="text-lg font-bold text-blue-700">₹{item.price * item.quantity}</p>
            </div>
          ))}
          <h3 className="text-xl font-semibold text-right mt-4">
            Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
