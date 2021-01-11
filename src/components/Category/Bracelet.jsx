import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";

const Bracelet = () => {
  const { getProductsBracelet, productsBracelets } = useContext(productsContext);
  useEffect(() => {
    getProductsBracelet();
  }, []);
  console.log(productsBracelets)
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around",marginTop: "150px",}}>
        {productsBracelets.map((item) => (
            <div key={item.id}>
              <Link to={`/details/${item.id}`}>
              <img style={{width:"80%"}} src={item.image} alt=""/>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Bracelet;
