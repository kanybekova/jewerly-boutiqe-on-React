import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import Header from "../Header/Header";

const Navbar = () => {
  const [view, setView] = useState(false);
  const [search, setSearch] = useState(false);
  const { products, getProducts } = useContext(productsContext);
  const { productsCountInCart } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="hamburger-menu" style={{ width: "100%" }}>
      {/* <input id="menu__toggle" type="checkbox" /> */}
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul
        className="menu__box"
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex" }}>
          <li style={{ marginRight: "35px" }}>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setView(!view)}
              className="menu__item"
            >
              КАТАЛОГ
            </a>
          </li>
          <li style={{ marginRight: "35px" }}>
            <a className="menu__item" href="">
              ЗАКАЗАТЬ
            </a>
          </li>
        </div>
        <Link to="/">
          <div className="logotype">
            <h1 className="logo">SAUI</h1>
            <p className="logo-description">J E W E R L Y</p>
          </div>
        </Link>

        <div style={{ display: "flex" }}>
          <li style={{ marginRight: "35px" }}>
            <a className="menu__item" href="/signin">
              ВХОД
            </a>
          </li>
          <li style={{ marginRight: "35px", position: "relative" }}>
            <a className="menu__item" href="/cart">
              КОРЗИНА
            </a>
            <div
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "100%",
                backgroundColor: "white",
                position: "relative",
                bottom: "20px",
                right: "-80px",
                display: "flex",
                justifyContent: "center",
                color: " #0098cf",
                fontWeight: "600",
              }}
              className="productsCount"
            >
              {productsCountInCart}
            </div>
          </li>
        </div>
      </ul>
      {search ? <div style={{ marginBottom: "40px" }}></div> : null}

      {view ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 20px ",
            position: "absolute",
            zIndex: "1",
            top: "40px",
            width: "400px",
            backgroundColor: "white",
          }}
        >
          <div style={{ alignItems: "center" }}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="/earrings">Cерьги</a>
              </li>
              <li>
                <a href="/rings">Кольца</a>
              </li>
              <li>
                <a href="/bracelet">Браслеты</a>
              </li>
              <li>
                <a href="/necklaces">Ожерелья</a>
              </li>
            </ul>
          </div>
          <div style={{ width: "50%", marginLeft: "30%" }}>
            <img
              style={{ width: "100%" }}
              src="https://faune-bijouterie.com/modules/pm_advancedtopmenu/column_icons/1-fr.jpg"
              alt=""
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
