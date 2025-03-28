import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./FormalStyles.css";

const products = [
  {id:1, name: "Formal Suit 1", price: "₹5,000", image: "https://littleboxindia.com/cdn/shop/products/9ecba9a1665fc879773c3c59b5e3f70e_2dd69582-4211-4a3c-af89-2128ae0c3907.jpg?v=1692199580" },
  {id:2, name: "Formal Suit 2", price: "₹6,000", image: "https://littleboxindia.com/cdn/shop/products/37befaedf9b508e3813a96d91f32758c.jpg?v=1692779728" },
  {id:3, name: "Formal Suit 3", price: "₹7,000", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/c/b/l/s-3015cyan-english-navy-original-imags9p2rpz24ugk.jpeg?q=20&crop=false" },
  {id:4, name: "Formal Suit 4", price: "₹8,000", image: "https://www.powersutra.co/cdn/shop/products/teal1.jpg?v=1741696987&width=1080" },
  {id:5, name: "Formal Suit 5", price: "₹9,000", image: "https://littleboxindia.com/cdn/shop/products/b0eb3f6a0c073484b7f11bb3f5aa1d5a_900x.jpg?v=1692199580" },
  {id:6, name: "Formal Suit 6", price: "₹10,000", image: "https://www.hancockfashion.com/cdn/shop/files/16116BlackS_5_1800x1800.jpg?v=1690526591" },
 
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
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
      <header className="bg-gradient-to-r from-gray-800 to-gray-600 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">StarFormals</h1>
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
        <p>© 2024 StarFormals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
