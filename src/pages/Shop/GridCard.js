import React, { useState } from "react";
import { shopData } from "../../data";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const GridCard = ({ itemsData }) => {
  const dispatch = useDispatch();

  return (
    <div className="shop-right-container">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div className="shop-right-box">
            <div className="shop-right-box-effect">
              <img src={item.img} alt="shop-img" />
              <div className="shop-right-effect">
                <div className="shop-effect-box">
                  <GrFavorite
                    onClick={() => dispatch(addCart(item))}
                    className="favorite-icon"
                  />
                </div>
                <div className="shop-effect-box">
                  <AiOutlineShoppingCart
                    onClick={() => dispatch(addToCart(item))}
                    className="search-icon"
                  />
                </div>
              </div>
            </div>
            <p>{item.title}</p>
            <h4>${item.price}</h4>
          </div>
        ))
      ) : (
        <p>there is no items</p>
      )}
    </div>
  );
};

export default GridCard;
