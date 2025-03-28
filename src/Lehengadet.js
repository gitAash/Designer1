import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Lehengadet.css";


const products = [
  { id: 1, name: "Lehenga 1", price: "₹10,000", image: "/1.jpeg", description: "A beautifully crafted lehenga, designed with intricate patterns, perfect for weddings and grand ceremonies. It combines tradition with a modern touch, making it the ideal choice for brides." },
  { id: 2, name: "Lehenga 2", price: "₹15,000", image: "/2.jpeg", description: "This festive lehenga is designed with vibrant colors and rich embroidery, making it an excellent choice for celebrations and family gatherings. Its elegance and charm will make you the center of attention." },
  { id: 3, name: "Lehenga 3", price: "₹12,000", image: "/3.jpeg", description: "A traditional lehenga with intricate embroidery and delicate embellishments. This timeless piece is perfect for those who appreciate heritage, with a perfect blend of craftsmanship and design." },
  { id: 4, name: "Lehenga 4", price: "₹18,000", image: "/4.jpeg", description: "Luxurious and opulent, this lehenga is ideal for grand celebrations. The heavy fabric and exquisite design make it the perfect choice for brides or anyone looking to make a statement at their special event." },
  { id: 5, name: "Lehenga 5", price: "₹20,000", image: "/5.jpeg", description: "A designer lehenga with fine details and stunning craftsmanship. The contemporary design combined with classic elements creates a sophisticated and elegant look, perfect for a wedding or high-profile event." },
  { id: 6, name: "Lehenga 6", price: "₹9,000", image: "/6.jpeg", description: "An affordable yet chic lehenga, ideal for those looking for style on a budget. It features modern designs and a versatile color palette, perfect for various occasions such as parties and festive gatherings." },
  { id: 7, name: "Lehenga 7", price: "₹22,000", image: "/7.jpeg", description: "An exclusive lehenga, crafted for special occasions and events. The rich fabric and exquisite detailing make it a standout piece, perfect for brides or those seeking a statement-making outfit." },
  { id: 8, name: "Lehenga 8", price: "₹11,000", image: "/8.jpeg", description: "This stunning lehenga combines a modern touch with traditional elements. Perfect for a festive gathering, it will make you feel beautiful and confident with its contemporary design and flattering fit." },
  { id: 9, name: "Lehenga 9", price: "₹8,000", image: "/9.jpeg", description: "An elegant lehenga that offers great value for money. It features beautiful embroidery and is designed to offer both comfort and style, making it ideal for smaller celebrations or intimate gatherings." },
  { id: 10, name: "Lehenga 10", price: "₹25,000", image: "/10.jpeg", description: "A premium lehenga, designed for a royal look. With its luxurious fabric, intricate embroidery, and stunning silhouette, it is the perfect choice for weddings or high-end events where you want to look your best." },
  { id: 11, name: "Lehenga 11", price: "₹14,000", image: "/11.jpeg", description: "This gorgeous lehenga features floral patterns and intricate detailing, creating a beautiful and feminine look. It’s perfect for daytime events, festivals, or as a bridal option for those who want a soft yet elegant appearance." },
  { id: 12, name: "Lehenga 12", price: "₹13,000", image: "/12.jpeg", description: "A charming lehenga that boasts delicate embroidery and fine fabrics. The rich design details and flattering silhouette make it a perfect choice for any special occasion, blending traditional elegance with modern charm." },
  { id: 13, name: "Lehenga 13", price: "₹7,500", image: "/13.jpeg", description: "A classic lehenga that combines timeless design with contemporary appeal. The affordable price makes it perfect for those who want a traditional look without compromising on style or quality." },
  { id: 14, name: "Lehenga 14", price: "₹19,000", image: "/4.jpeg", description: "A premium quality lehenga designed for formal events, this piece boasts intricate craftsmanship and luxurious fabrics. Ideal for a grand celebration or high-profile wedding, it provides an elegant and sophisticated look." },
];      



const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
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
      {/* Header */}
      <header className="bg-gradient-to-r from-[#5b9eb6] to-[#73C1DE] shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">StarFashion</h1>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <a href="/" className="text-white hover:text-blue-500">Home</a>
            <a href="/products" className="text-white hover:text-blue-500">Products</a>
            <a href="/contact-us" className="text-white hover:text-blue-500">Contact Us</a>
          </nav>

          {/* Sign Up Button */}
          <div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image} // Use /images/ as the path inside the public folder
              alt={product.name}
              className="rounded-lg mx-auto w-80 h-auto"
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button className="bg-gray-800 text-white rounded-full p-2">❮</button>
              <button className="bg-gray-800 text-white rounded-full p-2">❯</button>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-xl text-blue-700 font-bold mt-2">{product.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Quantity Selection and Add to Cart Buttons */}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 text-gray-600 p-2 rounded"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  className="w-16 text-center border border-gray-300 p-2 rounded"
                />
                <button
                  className="bg-gray-200 text-gray-600 p-2 rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 text-center">More Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-lg p-4 text-center">
              <img src="https://mandirawirk.in/cdn/shop/files/10_a2af37eb-fb35-469d-8253-199c2ca6d6c0.jpg?v=1694153981" alt="Product 1" className="rounded mx-auto w-32 h-32" />
              <h4 className="mt-2 text-gray-800 font-medium">Embroidered Kurta</h4>
              <p className="text-blue-700">₹2,499</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img src="https://sareewave.com/cdn/shop/products/1661854558.KP_3087.jpg?v=1664803192" alt="Product 2" className="rounded mx-auto w-32 h-32" />
              <h4 className="mt-2 text-gray-800 font-medium">Silk Saree</h4>
              <p className="text-blue-700">₹7,999</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img src="https://i.pinimg.com/474x/0a/fa/2e/0afa2e48b30eadd64cb03e0e134e2614.jpg" alt="Product 3" className="rounded mx-auto w-32 h-32" />
              <h4 className="mt-2 text-gray-800 font-medium">Designer Blouse</h4>
              <p className="text-blue-700">₹1,999</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-4 text-center">
        <p>© 2024 StarFashion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
