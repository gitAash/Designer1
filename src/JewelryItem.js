import React, { useState } from "react";
import { useParams } from "react-router-dom";

const jewelryProducts =[
  { id: 1, name: "Gold Necklace", image: "/img1.jpg", price: 299.99 },
  { id: 2, name: "Silver Ring", image: "/img2.jpg", price: 79.99 },
  { id: 3, name: "Ruby Necklace with Diamond Earrings", image: "/img3.jpg", price: 999.99 },
  { id: 4, name: "Ruby Necklace", image: "/img4.jpg", price: 199.99 },
  { id: 5, name: "Emerald Pendant", image: "/img5.jpg", price: 249.99 },
  { id: 6, name: "Emerald Necklace", image: "/img6.jpg", price: 349.99 },
  { id: 7, name: "Pearl Necklace", image: "/img7.jpg", price: 149.99 },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = jewelryProducts.find((product) => product.id === parseInt(id));
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, { ...product, quantity }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-[#5b9eb6] to-[#73C1DE] shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">StarFashion</h1>
          <nav className="flex space-x-8">
            <a href="/" className="text-white hover:text-blue-500">Home</a>
            <a href="/products" className="text-white hover:text-blue-500">Products</a>
            <a href="/contact-us" className="text-white hover:text-blue-500">Contact Us</a>
          </nav>
          <div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img src={product.image} alt={product.name} className="rounded-lg mx-auto w-80 h-auto" />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-xl text-blue-700 font-bold mt-2">{product.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} min="1" onChange={handleQuantityChange} className="w-16 text-center border border-gray-300 p-2 rounded" />
                <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-4 text-center">
        <p>© 2024 StarFashion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
