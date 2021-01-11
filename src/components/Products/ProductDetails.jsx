import { Grid, Paper, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

const ProductDetails = (props) => {
  const {
    getProductsDetails,
    productDetails,
    addAndDeleteProductInCart,
  } = useContext(productsContext);
  const classes = useStyles();

  useEffect(() => {
    getProductsDetails(props.match.params.id);
  }, []);

  return (
    <div>
      {productDetails ? (
        <Grid
          className="product-details-page"
          style={{
            // position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "40px",
            marginTop: "150px",
          }}
        >
          <Grid item md={3}>
            <div>
              <img
                className="product-details-img"
                style={{ width: "350px" }}
                src={productDetails.image}
                alt=""
              />
            </div>
          </Grid>

          <Grid item md={9}>
            <div>
              <h1 style={{ color: "#3498db" }}>{productDetails.name}</h1>
              <h5 style={{ color: "#3498db" }}>{productDetails.proba}</h5>
              <p
                style={{
                  marginBottom: "50px",
                  width: "50%",
                  fontWeight: "400",
                }}
              >
                {productDetails.description}
              </p>
              <div>
                <div style={{ position: "absolute" }} className="price">
                  <p>{productDetails.price} сом</p>
                </div>
                <button
                  className="product-details-btn"
                  // style={{ position: "relative" }}
                  onClick={() => addAndDeleteProductInCart(productDetails)}
                >
                  В корзину
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <h1>Lo</h1>
      )}
    </div>
  );
};

export default ProductDetails;
