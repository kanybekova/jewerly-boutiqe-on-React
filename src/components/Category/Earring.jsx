import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Earring = () => {
  const { getProductsEarrings, productsEarrings } = useContext(productsContext);
  useEffect(() => {
    getProductsEarrings();
  }, []);
  console.log(productsEarrings);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        {/* <h2>Серьги</h2> */}
        {productsEarrings.map((item) => (
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

export default Earring;
