import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Rigns = () => {
  const { getProductsRigns, productsRings} = useContext(productsContext);
  useEffect(() => {
    getProductsRigns();
  }, []);
  console.log(productsRings)
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around",marginTop: "150px",}}>
        {productsRings.map((item) => (
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

export default Rigns;