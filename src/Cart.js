import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Merge items with the same id and sum their quantities
    const mergedCart = storedCart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item, quantity: item.quantity || 1 }); // Ensure quantity is always valid
      }
      return acc;
    }, []);

    setCart(mergedCart);
    calculateTotal(mergedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(
        String(item.price || "₹0").replace(/[₹,]/g, "")
      );
      return sum + price * (item.quantity || 1);
    }, 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    alert("Proceeding to Checkout...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#BEE2EF] to-[#73C1DE]">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-300 py-4 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">
                    {item.price || "₹0"}
                  </p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-6 text-gray-600 text-lg font-bold">
                  ₹
                  {(
                    parseFloat(
                      String(item.price || "₹0").replace(/[₹,]/g, "")
                    ) * (item.quantity || 1)
                  ).toFixed(2)}
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-6 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-xl font-semibold text-gray-800">
              Total Price: ₹{totalPrice.toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="bg-[#BEE2EF] text-[#3C3CAD] py-2 px-6 rounded-lg hover:bg-[#73C1DE] hover:text-white"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
