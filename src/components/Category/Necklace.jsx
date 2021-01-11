import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Necklace = () => {
  const { getProductsNecklace, productsNecklace} = useContext(productsContext);
  useEffect(() => {
    getProductsNecklace();
  }, []);
  console.log(productsNecklace)
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around",marginTop: "150px",}}>
        {productsNecklace.map((item) => (
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

export default Necklace;