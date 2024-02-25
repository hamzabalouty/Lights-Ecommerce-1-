import React, { useState } from "react";
import "./Collection.css";
import { NavLink } from "react-router-dom";
import { collectionData } from "../../data";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const Collection = () => {
  const dispatch = useDispatch();

  const [itemsData, setItemsData] = useState(collectionData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = itemsData.slice(firstPostIndex, lastPostIndex);

  //get all cat uniqe
  const allCategory = [...new Set(collectionData.map((i) => i.category))];

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(collectionData);
    } else {
      const newArr = collectionData.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  let pages = [];

  for (let i = 1; i <= Math.ceil(6 / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="collections">
      <div className="collections-title">
        <h2>LATEST COLLECTION</h2>
      </div>
      <div className="collection-containers">
        <div className="collection-btns">
          {allCategory.map((cat) => (
            <div>
              <NavLink className="navlink-btn" onClick={() => onFilter(cat)}>
                {cat}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="collection-box-container">
          {currentPosts.map((item) => (
            <div className="collection-box">
              <img src={item.img} alt="collection-img" />
              <div className="collection-box-btn">
                <button>
                  <MdOutlineFavoriteBorder
                    onClick={() => dispatch(addCart(item))}
                    className="favorite-icon"
                  />
                </button>
                <button>
                  <AiOutlineShoppingCart
                    onClick={() => dispatch(addToCart(item))}
                    className="cart-icon"
                  />
                </button>
              </div>
              <p>{item.title}</p>
              <h5>${item.price}</h5>
            </div>
          ))}
        </div>
        <div className="pagination">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
