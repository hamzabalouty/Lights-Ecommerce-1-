import React, { useState } from "react";
import { shopData } from "../../data";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const ListCard = ({ itemsData }) => {
  const dispatch = useDispatch();

  return (
    <div className="shop-right-container-list">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div className="shop-box-right">
            <div className="shop-box-effect">
              <img src={item.img} alt="shop-img" />
            </div>
            <div className="shop-list-content">
              <p>{item.title}</p>
              <h4>${item.price}</h4>
              <button
                onClick={() => dispatch(addCart(item))}
                className="btn-list"
              >
                Add To Favorite
              </button>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="btn-list"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>there is no items</p>
      )}
    </div>
  );
};

export default ListCard;
