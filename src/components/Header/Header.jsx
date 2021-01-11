import { Link } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";

const Header = () => {
  const [view, setView] = useState(false);
  const { products, getProducts } = useContext(productsContext);
  const { productsCountInCart } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ opacity: "1", pointerEvents: "all" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0",
          right: "0",
          height: "80vh",
          background: "rgba(252,175,186,.3)",
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
};

export default Header;
