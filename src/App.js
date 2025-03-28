import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { CartProvider } from "./CartContext";
import "./App.css";
import Lehenga from "./lehenga";
import FormalProductDetailPage from "./formalProducts.js";
import Lehengadet from "./Lehengadet";
import ShoesPage from "./Shoes.js";
import Jumpsuit from "./jumpsuit";
import Jumpsuitdet from "./jumpsuitdet"
import JewelryList from "./JewelryList.js";
import Cart from "./Cart";
import FormalsDetailPage from "./FormalProductDetailPage.js";
import ShoesDetPage from "./shoesdet.js"
import JewelryItem from "./JewelryItem.js"

const categories = [
  {
    id: 1,
    name: "Accessories",
    img: "https://i.pinimg.com/236x/0e/42/9f/0e429f0bb4ddec0fbf3499b27456c12b.jpg",
    style: { width: "120px", height: "180px", marginTop: "40px" },
  },
  {
    id: 2,
    name: "Formal's",
    img: "https://www.andygreenwell.com/wp-content/uploads/2017/01/business-headshot-photography-dearborn_31483.jpg",
    style: { width: "180px", height: "240px", marginTop: "10px" },
  },
  {
    id: 3,
    name: "Ethnic",
    img: "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400867.jpg",
    style: { width: "200px", height: "300px", marginTop: "0px" },
  },
  {
    id: 4,
    name: "Western",
    img: "https://assets0.mirraw.com/images/12151238/image_zoom.jpeg?1709039221",
    style: { width: "180px", height: "240px", marginTop: "10px" },
  },
  {
    id: 5,
    name: "Shoes",
    img: "https://c0.wallpaperflare.com/preview/852/546/548/boot-shoe-footwear-leather.jpg",
    style: { width: "120px", height: "180px", marginTop: "40px" },
  },
];

function HomePage() {
  const containerRef = useRef(null); // Reference to the scrollable container
  const navigate = useNavigate(); // React Router navigation hook

  // Custom scroll function
  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 300; // Pixels to scroll per click
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Navigate to Lehenga page if Ethnic is clicked
  // Navigate to the appropriate page based on the category clicked
const handleCategoryClick = (category) => {
  if (category.name === "Ethnic") {
    navigate("/lehenga");
  } else if (category.name === "Formal's") {
    navigate("/formals");
  }
  else if (category.name === "Accessories") {
    navigate("/JewelryList");
  }
  else if (category.name === "Shoes") {
    navigate("/Shoes");
  }
  else if (category.name === "Western") {
    navigate("/jumpsuit");
  }
};


  return (
    <div className="app">

      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <i className="fas fa-star logo-icon"></i> {/* Font Awesome Star Icon */}
          <span>StarFashion</span>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link active">Home</Link>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="actions">
          <button className="action-btn">Search</button>
          <button className="action-btn" onClick={()=>navigate("/cart")}>Cart</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="text-content">
          <h1>
            Getting the best <span className="highlight">and</span> latest style
            has never been <span className="highlight">easier!</span>
          </h1>
          <p className="description">
            <strong>StarFashion</strong> is a platform that helps to make fashion
            accessible to all. It brings fashion right to your doorstep!
          </p>
          <button className="shop-btn">Shop Collections</button>
        </div>

        {/* Image Section */}
        <div className="image-content">
          <div className="main-images">
            <img
              src="https://images.pexels.com/videos/5586008/girls-online-online-shopping-shopping-5586008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Fashion 1"
              className="main-image"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240330/pngtree-beautiful-girl-with-colorful-shoping-bag-shopping-online-image_15698225.jpg"
              alt="Fashion 2"
              className="main-image"
            />
          </div>
        </div>
      </main>

      {/* Categories Section */}
      <div className="categories">
        <h2 className="category-title">Categories</h2>
        <div className="carousel-container">
          <button className="arrow left-arrow" onClick={() => handleScroll("left")}>‹</button>
          <div className="category-container" ref={containerRef}>
            {categories.map((item) => (
              <div
                className="category-item"
                key={item.id}
                style={{ marginTop: item.style.marginTop }}
                onClick={() => handleCategoryClick(item)}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="category-image"
                  style={{
                    width: item.style.width,
                    height: item.style.height,
                  }}
                />
                <div className="category-name">{item.name}</div>
              </div>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => handleScroll("right")}>›</button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lehenga" element={<Lehenga />} />
          <Route path="/lehenga/:id" element={<Lehengadet />} />
          <Route path="/formals" element={<FormalProductDetailPage />} />
          <Route path="/formals/:id" element={<FormalsDetailPage />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/jumpsuit" element={<Jumpsuit />} />
          <Route path="/jumpsuit/:id" element={<Jumpsuitdet />} />
          <Route path="/jewelryList" element={<JewelryList />} />
          <Route path="/jewelryList/:id" element={<JewelryItem />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/shoes/:id" element={<ShoesDetPage />} />

          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;  