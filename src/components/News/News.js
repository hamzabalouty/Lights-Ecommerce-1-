import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { newsData } from "../../data";

const News = () => {
  return (
    <div className="news">
      <div className="news-view">
        <div className="news-view-box-l">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/files/img-4-1_770x.jpg?v=1614289040"
            alt="view-img"
          />
          <div className="news-view-content">
            <h5>Get Upto</h5>
            <h2>40% OFF</h2>
            <h4>On floor lamps</h4>
            <Link to="/shop" className="to-shop-link-l">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="news-view-box-r">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/files/img-5-1_770x.jpg?v=1614289040"
            alt="view-img"
          />
          <div className="news-view-content">
            <h5>Flat Upto</h5>
            <h2>60% OFF</h2>
            <h4>On floor lamps</h4>
            <Link to="/shop" className="to-shop-link-r">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="news-title">
        <h2>BLOG POST</h2>
      </div>
      <div className="news-container">
        {newsData.map((item) => (
          <div className="news-box">
            <div className="news-box-img">
              <img src={item.img} alt="news-img" />
            </div>
            <h3>{item.title}</h3>
            <p>
              Cames cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, preti..
            </p>
            <Link to={`/readpage/${item.id}`} className="readpage-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
