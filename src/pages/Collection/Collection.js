import React, { useEffect } from "react";
import "./Collection.css";
import { Link } from "react-router-dom";

const Collection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="collection">
      <div className="collection-title">
        <h4>ALL COLLECTIONS</h4>
      </div>
      <div className="collection-container">
        <div className="collection-box-types">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0021_Layer-11_600x.jpg?v=1535536158"
            alt="collection-img"
          />
          <h4>Best Off</h4>
          <Link to="/shop" className="toshop-link">
            Shop Now
          </Link>
        </div>
        <div className="collection-box-types">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0023_Layer_9_6b9ba389-dfaf-4180-a127-23e35ae941e0_600x.jpg?v=1535359765"
            alt="collection-img"
          />
          <h4>Best Seller</h4>
          <Link to="/shop" className="toshop-link">
            Shop Now
          </Link>
        </div>
        <div className="collection-box-types">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0018_Layer_14_5fe3a7e5-de19-4c1b-959c-22accfae371a_600x.jpg?v=1535357255"
            alt="collection-img"
          />
          <h4>Demand product</h4>
          <Link to="/shop" className="toshop-link">
            Shop Now
          </Link>
        </div>
        <div className="collection-box-types">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0019_Layer_13_cbbc0e54-70da-4af2-b75e-2b80a6a40dfb_600x.jpg?v=1535357380"
            alt="collection-img"
          />
          <h4>Featured</h4>
          <Link to="/shop" className="toshop-link">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
