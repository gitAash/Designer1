import React, { useRef } from "react";
import "./App.css";

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

const App = () => {
  const containerRef = useRef(null); // Reference to the scrollable container

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

  return (
    <div className="App">
      <h2 className="category-title">Category</h2>
      <div className="carousel-container">
        <button
          className="arrow left-arrow"
          onClick={() => handleScroll("left")}
        >
          ‹
        </button>
        <div className="category-container" ref={containerRef}>
          {categories.map((item) => (
            <div
              className="category-item"
              key={item.id}
              style={{ marginTop: item.style.marginTop }}
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
        <button
          className="arrow right-arrow"
          onClick={() => handleScroll("right")}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default App;