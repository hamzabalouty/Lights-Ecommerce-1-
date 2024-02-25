import React, { useEffect } from "react";
import "./ProductId.css";
import { useParams } from "react-router-dom";
import { arrivalsData } from "../../data";

const Product = () => {
  const { id } = useParams();
  const product = arrivalsData.find((p) => p.id === +id);
  const { img, title, price } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-details">
      <div className="product-details-title">
        <h4>PRODUCT</h4>
        <p>Home / Featured / {title}</p>
      </div>
      <div className="product-details-body">
        <img src={img} alt="product-img" />
        <div className="product-details-content">
          <h2>{title}</h2>
          <h4>$ {price}.00</h4>
          <table className="product-details-table">
            <tr>
              <td>Material:</td>
              <td>Wood</td>
            </tr>
            <tr>
              <td>Vendor:</td>
              <td>Ajanta</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>Lamp</td>
            </tr>
            <tr>
              <td>Availability:</td>
              <td>In stock!</td>
            </tr>
            <tr>
              <td>Quantity:</td>
              <td>1</td>
            </tr>
          </table>
          <button>Add To Wishlist</button>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
