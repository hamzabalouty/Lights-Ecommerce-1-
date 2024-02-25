import React, { useState, useEffect } from "react";
import "./Shop.css";

import "react-toastify/dist/ReactToastify.css";
import { Button, Row } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import { shopData } from "../../data";

const Shop = () => {
  const [itemsData, setItemsData] = useState(shopData);

  const [view, setView] = useState(true);

  const allBrands = [...new Set(shopData.map((i) => i.brand))];
  const allColors = [...new Set(shopData.map((i) => i.color))];
  const allMaterials = [...new Set(shopData.map((i) => i.material))];
  const allSize = [...new Set(shopData.map((i) => i.size))];

  const filterbyBrand = (cat) => {
    if (cat === "All") {
      setItemsData(shopData);
    } else {
      const newArr = shopData.filter((item) => item.brand === cat);
      setItemsData(newArr);
    }
  };

  const onBrand = (item) => {
    filterbyBrand(item);
  };

  const filterbyColor = (color) => {
    if (color === "All") {
      setItemsData(shopData);
    } else {
      const newArr = itemsData.filter((item) => item.color === color);
      setItemsData(newArr);
    }
  };

  const onColor = (item) => {
    filterbyColor(item);
  };

  const filterbyMaterial = (mat) => {
    if (mat === "All") {
      setItemsData(shopData);
    } else {
      const newArr = itemsData.filter((item) => item.material === mat);
      setItemsData(newArr);
    }
  };

  const onMaterial = (item) => {
    filterbyMaterial(item);
  };

  const filterbySize = (size) => {
    if (size === "All") {
      setItemsData(shopData);
    } else {
      const newArr = itemsData.filter((item) => item.size === size);
      setItemsData(newArr);
    }
  };

  const onSize = (item) => {
    filterbySize(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop">
      <div className="shop-title">
        <h4>COLLECTION</h4>
        <p>Home / Products</p>
      </div>
      <div className="shop-container">
        <div className="shop-left">
          <div className="shop-left-box">
            <div className="shop-left-title">
              <h3>BRAND</h3>
            </div>
            {allBrands.map((cat) => (
              <div key={cat.id}>
                <div className="shop-left-element">
                  <div className="shop-span"></div>
                  <button onClick={() => onBrand(cat)}>{cat}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-left-box">
            <div className="shop-left-title">
              <h3>COLOR</h3>
            </div>
            {allColors.map((cat) => (
              <div key={cat.id}>
                <div className="shop-left-element">
                  <div className="shop-span"></div>
                  <button onClick={() => onColor(cat)}>{cat}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-left-box">
            <div className="shop-left-title">
              <h3>MATERIAL</h3>
            </div>
            {allMaterials.map((cat) => (
              <div key={cat.id}>
                <div className="shop-left-element">
                  <div className="shop-span"></div>
                  <button onClick={() => onMaterial(cat)}>{cat}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-left-box">
            <div className="shop-left-title">
              <h3>SIZE</h3>
            </div>
            {allSize.map((cat) => (
              <div key={cat.id}>
                <div className="shop-left-element">
                  <div className="shop-span"></div>
                  <button onClick={() => onSize(cat)}>{cat}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shop-right">
          <>
            <div
              className="list-grid-btn"
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem"
              }}
            >
              <>
                <Button
                  onClick={() => setView(true)}
                  size="large"
                  icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
                />
              </>
              <>
                <Button
                  onClick={() => setView(false)}
                  size="large"
                  icon={
                    <UnorderedListOutlined style={{ fontSize: "1.5rem" }} />
                  }
                />
              </>
            </div>

            {view === true ? (
              <GridCard itemsData={itemsData} />
            ) : (
              <ListCard itemsData={itemsData} />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Shop;
