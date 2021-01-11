import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "20px",
  },
  media: {
    width: 350,
    height: 550,
  },
});
const Body = () => {
  const { products, getProducts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  const classes = useStyles();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "80%",
        }}
      >
        {products.map((item) => (
          <Card className={classes.root}>
            <CardActionArea key={item.id}>
              <Link to={`/details/${item.id}`}>
                <CardMedia className={classes.media} image={item.image} />
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div>
        <Link to="/products-list">
          <button style={{ margin: "90px" }} className="product-details-btn">
            КАТАЛОГ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
