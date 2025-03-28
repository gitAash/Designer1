import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./JumpsuitStyles.css";

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
      <header className="bg-gradient-to-r from-pink-600 to-purple-600 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">StarJumpsuits</h1>
          <nav className="flex space-x-8">
            <a href="/" className="text-white hover:text-yellow-400">Home</a>
            <a href="/products" className="text-white hover:text-yellow-400">Products</a>
            <a href="/contact-us" className="text-white hover:text-yellow-400">Contact Us</a>
          </nav>
          <div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img src={product.img} alt={product.name} className="rounded-lg mx-auto w-80 h-auto" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-xl text-pink-700 font-bold mt-2">{product.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} min="1" onChange={handleQuantityChange} className="w-16 text-center border border-gray-300 p-2 rounded" />
                <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="flex space-x-4">
                <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500" onClick={addToCart}>Add to Cart</button>
                <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 text-center">
        <p>© 2024 StarJumpsuits. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
