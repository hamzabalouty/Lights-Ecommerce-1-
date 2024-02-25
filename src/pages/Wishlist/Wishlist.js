import React from "react";
import "./Wishlist.css";
import { Link } from 'react-router-dom';
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clear } from "../../rtk/slices/cart-slice";
import { deleteCart } from "../../rtk/slices/favorite-slice";

const Wishlist = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      <div className='wishlist-title'>
        <h3>WISHLIST</h3>
        <p>Home / Wishlist</p>
      </div>
      <div className="wishlist-container">
        
            <table>
              <tr className="wishlist-table-header">
                <th>
                  <p>Image</p>
                </th>
                <th>
                  <p>Product</p>
                </th>
                <th>
                  <p>Unit Price</p>
                </th>
                <th>Actions</th>
                <th>
                  <p>Remove</p>
                </th>
              </tr>
            {favorite.map((item) => (
              <tr className="wishlist-table-body">
                  <td>
                    <img src={item.img} alt="pro-img" />
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <td>
                    <button className="btn-addtocart" onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                  </td>
                  <td className="remove-fromwishlist ">
                    <button onClick={() => dispatch(deleteCart(item))}>
                      Remove
                    </button>
                  </td>
              </tr>
            ))}
          </table>
      </div>
    </div>
  );
};

export default Wishlist;