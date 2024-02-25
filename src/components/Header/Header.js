import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-modal";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-top-left">
            <div className="header-left-contact">
              <BsTelephoneFill className="header-icon" />
              <p>0000 - 123 - 456789</p>
            </div>
            <div className="header-left-contact">
              <MdEmail className="header-icon" />
              <p>info@example.com</p>
            </div>
          </div>
          <div className="header-top-right">
            <Link to="/account" className="header-account-link">
              My Account
            </Link>
            <Link to="/cart" className="header-cart-link">
              <AiOutlineShoppingCart className="header-cart-icon" />
              <p>cart {cart.length}</p>
            </Link>
          </div>
        </div>
        <div className="header-middle">
          <Link to="/">
            <img
              className="logo-image"
              src="https://dt-lights.myshopify.com/cdn/shop/files/logo_300x300.png?v=1632982273"
              alt="logo-image"
            />
          </Link>
          <div className="header-search">
            <input type="text" placeholder="Search" />
            <button>
              <HiOutlineSearch className="search-icon" />
            </button>
          </div>
          <div className="header-middle-right">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/icons-6_40x40_5a46ba53-8274-4a82-8b53-bf793da7ba9a_40x40.png?v=1614290210"
              alt="deliver-image"
            />
            <p>FREE DELIVERY ORDER OVER $100</p>
          </div>
          <AiOutlineMenu
            onClick={() => setModalIsOpen(true)}
            className="header-menu-icon-top"
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="header-modal"
          >
            <div className="header-modal-list">
              <button onClick={() => setModalIsOpen(false)}>X</button>
              <div className="modal-nav-link">
                <li>
                  <Link to="/" className="nav-link-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collection" className="nav-link-item">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="nav-link-item">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link-item">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="nav-link-item">
                    Wishlist
                  </Link>
                </li>
              </div>
            </div>
          </Modal>
        </div>
        <div className="header-bottom">
          <AiOutlineMenu
            onClick={() => setModalIsOpen(true)}
            className="header-menu-icon"
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="header-modal"
          >
            <div className="header-modal-list">
              <button onClick={() => setModalIsOpen(false)}>X</button>
              <div className="modal-nav-link">
                <li>
                  <Link to="/" className="nav-link-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collection" className="nav-link-item">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="nav-link-item">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link-item">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="nav-link-item">
                    Wishlist
                  </Link>
                </li>
              </div>
            </div>
          </Modal>
          <nav className="nav-link">
            <li>
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="nav-item">
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="nav-item">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="nav-item">
                Wishlist
              </NavLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
