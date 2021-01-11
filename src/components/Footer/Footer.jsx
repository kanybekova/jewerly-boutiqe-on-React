import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        background: "rgba(252,175,186,.3)",
        padding: "8% ",
        display: "flex",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/rings">
          <span>Кольца</span>
        </Link>
        <Link to="/earrings">
          <span>Серьги</span>
        </Link>
        <Link to="/bracelet">
          <span>Браслеты</span>
        </Link>
        <Link to="/necklaces">
          <span>Ожерелье</span>
        </Link>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "20%" }}
      >
        <span>Связаться с нами</span>
        <span>Руководство по размерам</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "20%" }}
      >
        <Link to="/cart">
          <span>Корзина</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
