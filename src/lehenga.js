import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Header from "./Header";
import Footer from "./Footer";
// import ProductCard from "./ProductCard";

const products = [
  {id:1, name: "Lehenga 1", price: "₹10,000", image: "1.jpeg" },
  {id:2, name: "Lehenga 2", price: "₹15,000", image: "2.jpeg" },
  {id:3, name: "Lehenga 3", price: "₹12,000", image: "3.jpeg" },
  {id:4, name: "Lehenga 4", price: "₹18,000", image: "4.jpeg" },
  {id:5, name: "Lehenga 5", price: "₹20,000", image: "5.jpeg" },
  {id:6, name: "Lehenga 6", price: "₹9,000", image: "6.jpeg" },
  {id:7, name: "Lehenga 7", price: "₹22,000", image: "7.jpeg" },
  {id:8, name: "Lehenga 8", price: "₹11,000", image: "8.jpeg" },
  {id:9, name: "Lehenga 9", price: "₹8,000", image: "9.jpeg" },
  {id:10, name: "Lehenga 10", price: "₹25,000", image: "10.jpeg" },
  {id:11, name: "Lehenga 11", price: "₹14,000", image: "11.jpeg" },
  {id:12, name: "Lehenga 12", price: "₹13,000", image: "12.jpeg" },
  {id:13, name: "Lehenga 13", price: "₹7,500", image: "13.jpeg" },
  {id:14, name: "Lehenga 14", price: "₹19,000", image: "4.jpeg" },
];


const App = () => {

  const handleProductClick = (id) => {
    navigate(`/lehenga/${id}`); // Navigate to the detail page with the product ID
  };
  const navigate = useNavigate();


  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto px-4 py-6">
        {/* Main Content */}
        <div className="flex flex-wrap">
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
            <h2 className="font-bold text-lg mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Bridal Wear
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Festive Wear
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Casual Wear
                </label>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input type="range" min="5000" max="50000" className="w-full" />
              <p className="text-sm text-gray-600">Up to ₹50,000</p>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Brand</h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Brand A
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Brand B
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Brand C
                </label>
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> S
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> M
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> L
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> XL
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> XXL
                </label>
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Red
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Blue
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Green
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Yellow
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> White
                </label>
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <main className="w-full lg:w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
              {products.map((product, index) => (
            <div
               key={product.id}
               className="border rounded-lg p-4 lg:p-6 cursor-pointer"
               onClick={() => handleProductClick(product.id)} >
              
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
                      <FontAwesomeIcon icon={faCartShopping} /> {/* Cart Icon */}
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

