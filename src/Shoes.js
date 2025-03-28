import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./Header";
import Footer from "./Footer";

const products = [
  { id: 1, name: "shoes 1", price: "₹10,000", image: "s1.jpg" },
  { id: 2, name: "shoes 2", price: "₹15,000", image: "s2.jpg" },
  { id: 3, name: "shoes 3", price: "₹12,000", image: "s3.jpg" },
  { id: 4, name: "shoes 4", price: "₹18,000", image: "s4.jpg" },
  { id: 5, name: "shoes 5", price: "₹20,000", image: "s5.jpg" },
  { id: 6, name: "shoes 6", price: "₹9,000", image: "s6.jpg" },
  { id: 7, name: "shoes 7", price: "₹22,000", image: "s7.jpg" },
  { id: 8, name: "shoes 8", price: "₹11,000", image: "s8.jpg" },
  { id: 9, name: "shoes 9", price: "₹8,000", image: "s9.jpg" },
  { id: 10, name: "shoes 10", price: "₹25,000", image: "s10.jpg" },
  { id: 11, name: "shoes 11", price: "₹14,000", image: "s11.jpg" },
  { id: 12, name: "shoes 12", price: "₹13,000", image: "s12.jpg" },
  { id: 13, name: "shoes 13", price: "₹7,500", image: "s13.jpg" },
];

const App = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleProductClick = (id) => {
    navigate(`/shoes/${id}`); // Navigate to the detail page with the product ID
  };

  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto px-4 py-6">
        {/* Main Content */}
        <div className="flex flex-wrap">
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
            <h2 className="font-bold text-lg mb-4">Filters</h2>

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
                  <input type="checkbox" className="mr-2" />5
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />6
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> 7
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />8
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />9
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
