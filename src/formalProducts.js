import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const products = [
  {id:1, name: "Formal Suit 1", price: "₹5,000", image: "https://littleboxindia.com/cdn/shop/products/9ecba9a1665fc879773c3c59b5e3f70e_2dd69582-4211-4a3c-af89-2128ae0c3907.jpg?v=1692199580" },
  {id:2, name: "Formal Suit 2", price: "₹6,000", image: "https://littleboxindia.com/cdn/shop/products/37befaedf9b508e3813a96d91f32758c.jpg?v=1692779728" },
  {id:3, name: "Formal Suit 3", price: "₹7,000", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/c/b/l/s-3015cyan-english-navy-original-imags9p2rpz24ugk.jpeg?q=20&crop=false" },
  {id:4, name: "Formal Suit 4", price: "₹8,000", image: "https://www.powersutra.co/cdn/shop/products/teal1.jpg?v=1741696987&width=1080" },
  {id:5, name: "Formal Suit 5", price: "₹9,000", image: "https://littleboxindia.com/cdn/shop/products/b0eb3f6a0c073484b7f11bb3f5aa1d5a_900x.jpg?v=1692199580" },
  {id:6, name: "Formal Suit 6", price: "₹10,000", image: "https://www.hancockfashion.com/cdn/shop/files/16116BlackS_5_1800x1800.jpg?v=1690526591" },
 
];

const App = () => {

  const handleProductClick = (id) => {
    navigate(`/formals/${id}`); 
  };
  
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap">
          <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Business Wear
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Office Wear
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Party Wear
                </label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input type="range" min="3000" max="15000" className="w-full" />
              <p className="text-sm text-gray-600">Up to ₹15,000</p>
            </div>
          </aside>
          <main className="w-full lg:w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 lg:p-6 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <div className="flex items-center mt-4">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="w-12 p-2 border border-gray-300 rounded mr-2"
                      defaultValue={1}
                    />
                    <button className="text-blue-500 hover:text-blue-700">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
