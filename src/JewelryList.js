import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const jewelryProducts =[
  { id: 1, name: "Gold Necklace", image: "/img1.jpg", price: 299.99 },
  { id: 2, name: "Silver Ring", image: "/img2.jpg", price: 79.99 },
  { id: 3, name: "Ruby Necklace with Diamond Earrings", image: "/img3.jpg", price: 999.99 },
  { id: 4, name: "Ruby Necklace", image: "/img4.jpg", price: 199.99 },
  { id: 5, name: "Emerald Pendant", image: "/img5.jpg", price: 249.99 },
  { id: 6, name: "Emerald Necklace", image: "/img6.jpg", price: 349.99 },
  { id: 7, name: "Pearl Necklace", image: "/img7.jpg", price: 149.99 },
];

const JewelryPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/JewelryList/${id}`);
  };

  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <label className="block"><input type="checkbox" className="mr-2" /> Necklaces</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Rings</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Bracelets</label>
            </div>
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input type="range" min="5000" max="50000" className="w-full" />
              <p className="text-sm text-gray-600">Up to ₹50,000</p>
            </div>
          </aside>

          {/* Products Section */}
          <main className="w-full lg:w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-6">Jewelry Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {jewelryProducts.map((product) => (
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

export default JewelryPage;
