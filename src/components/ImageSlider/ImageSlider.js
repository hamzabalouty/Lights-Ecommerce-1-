import React from "react";
import "./ImageSlider.css";

function ImageSlider() {
  return (
    <div className="image-slider">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/slider-lights-1.jpg?v=1614290583"
              alt="..."
            />
            <div className="image-content">
              <h3>Lighting</h3>
              <h1>MODERN LAMPS</h1>
              <h1>60% OFF</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/slider-lights-2.jpg?v=1614290583"
              alt="..."
            />
            <div className="image-content">
              <h3>Lighting</h3>
              <h1>EID LAMPS</h1>
              <h1>50% OFF</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/slider-lights-3.jpg?v=1614290583"
              alt="..."
            />
            <div className="image-content-right">
              <h3>Lighting</h3>
              <h1>FLASH SALE</h1>
              <h1>70% OFF</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
