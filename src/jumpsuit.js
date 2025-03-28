import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Header from "./Header";
import Footer from "./Footer";
const products = [ 
{ id: 1, name: "Female jumpsuit", category: "Jumpsuit", price: 689, 
img: 
"https://www.libas.in/cdn/shop/files/35098.jpg?v=1738922385", 
gender: "Female", age: "22 - 25" }, 
{ id: 2, name: "Female Jumpsuit", category: "Jumpsuit", price: 599, 
img: "https://imagescdn.pantaloons.com/img/app/product/8/861496-10180319.jpg?auto=format&w=450", gender: "Female", age: "22 - 25" }, 
{ id: 3, name: "Female Jumpsuit", category: "Jumpsuit", price: 
1299.99, img: 
"https://www.labelkanupriya.com/cdn/shop/files/1698835980586.jpg?v=1715247676&width=2048", gender: "Female", age: "22 - 25" }, 
{ id: 4, name: "Female Jumpsuit", category: "Jumpsuit", price: 
999.99, img: 
"https://westernera.com/cdn/shop/files/formal-wear-side-knot-overlap-blue-jumpsuit-jumpsuits-for-women-636585.jpg?v=1735327187", gender: "Female", age: "22 - 25" }, 
{ id: 5, name: "Female Jumpsuit", category: "Jumpsuit", price: 
1399, img: "https://5.imimg.com/data5/SELLER/Default/2022/3/WK/OX/UD/92264406/whatsapp-image-2022-03-07-at-9-56-49-am-500x500.jpeg", gender: "Female", age: "22 - 25" }, 
{ id: 6, name: "Female Jumpsuit", category: "Jumpsuit", price: 
999.99, img: 
"https://www.exude.in/cdn/shop/files/DSC_4433.jpg?v=1741253367&width=1500", gender: "Female", age: "22 - 25" }, 
{ id: 7, name: "Female Jumpsuit", category: "Jumpsuit", price: 899, 
img: 
"https://assets.ajio.com/medias/sys_master/root/20230628/W2eO/649bf531a9b42d15c90f371c/-473Wx593H-465848242-teal-MODEL.jpg", gender: "Female", age: "22 25" }, 
{ id: 8, name: "Female Jumpsuit", category: "Jumpsuit", price: 799, 
img: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgfo9vIjBuAkYvo8hXSrQSseuQ2xqxcS_ng&s", gender: "Female", age: "22 - 25" }, 
{ id: 9, name: "Female Jumpsuit", category: "Jumpsuit", price: 1299.99, img: "https://wforwoman.com/cdn/shop/files/23AUW19718-122183.jpg?v=1726652207", gender: "Female", age: "22 - 25" }, 


  ]; 
 
  const App = () => {

    const handleProductClick = (id) => {
      navigate(`/jumpsuit/${id}`); // Navigate to the detail page with the product ID
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
                      src={product.img}
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
  
  