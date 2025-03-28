import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Lehengadet.css";

const products = [
    { id: 1, name: "Shoes 1", price: "₹10,000", image: "/s1.jpg", description: "A stylish and comfortable pair of sneakers, perfect for everyday wear." },
    { id: 2, name: "Shoes 2", price: "₹15,000", image: "/s2.jpg", description: "Premium running shoes with excellent cushioning and grip." },
    { id: 3, name: "Shoes 3", price: "₹12,000", image: "/s3.jpg", description: "Classic formal shoes crafted with fine leather." },
    { id: 4, name: "Shoes 4", price: "₹18,000", image: "/s4.jpg", description: "Trendy sneakers with a modern design, lightweight and breathable." },
    { id: 5, name: "Shoes 5", price: "₹20,000", image: "/s5.jpg", description: "High-quality leather boots with a rugged design." },
    { id: 6, name: "Shoes 6", price: "₹9,000", image: "/s6.jpg", description: "Comfortable loafers with a sleek and minimalistic design." },
    { id: 7, name: "Shoes 7", price: "₹22,000", image: "/s7.jpg", description: "Luxury dress shoes with premium craftsmanship." },
    { id: 8, name: "Shoes 8", price: "₹11,000", image: "/s8.jpg", description: "Versatile sports shoes designed for multiple activities." },
    { id: 9, name: "Shoes 9", price: "₹8,000", image: "/s9.jpg", description: "Affordable and stylish sneakers for daily use." },
    { id: 10, name: "Shoes 10", price: "₹25,000", image: "/s10.jpg", description: "Premium designer shoes with top-notch materials." },
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(Math.max(1, parseInt(event.target.value) || 1));
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
            {/* Keeping the header unchanged */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-white">ShoeStyle</h1>
                    <nav className="flex space-x-8">
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                        <a href="/shoes" className="text-white hover:text-gray-300">Shoes</a>
                        <a href="/contact-us" className="text-white hover:text-gray-300">Contact Us</a>
                    </nav>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">Sign Up</button>
                </div>
            </header>

            {/* Product Details */}
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <img src={product.image} alt={product.name} className="rounded-lg mx-auto w-80 h-auto" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-xl text-blue-700 font-bold mt-2">{product.price}</p>
                        <p className="text-gray-600 mt-4">{product.description}</p> {/* Fixing description display */}

                        <div className="mt-4 flex items-center space-x-2">
                            <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <input type="number" value={quantity} min="1" onChange={handleQuantityChange} className="w-16 text-center border p-2 rounded" />
                            <button className="bg-gray-200 text-gray-600 p-2 rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
                            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>© 2024 ShoeStyle. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProductDetailPage;
