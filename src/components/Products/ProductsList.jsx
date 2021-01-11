import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { productsContext } from "../../contexts/ProductsContext";
import { Link, useHistory } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const ProductsList = (props) => {
  const { products, getProducts, currentPosts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  // const history = useHistory();
  // const search = new URLSearchParams(history.location.search);
  // console.log(search.get("q"));
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // function fetchParams(params, value) {
  //   if (value === "all") {
  //     props.history.push("/products-list");
  //     props.history.push(props.location.pathname.replace(params));
  //     getProducts();
  //     return;
  //   }
  //   let search = new URLSearchParams(props.history.location.search);
  //   search.set(params, value);
  //   let url = `${props.location.pathname}?${search.toString()}`;
  //   props.history.push(url);
  //   getProducts();
  // }

  const [state, setState] = useState(false);

  return (
    <>
      <Container>
        <div className="product-list">
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "150px",
            }}
            className="block-in-product-list"
          >
            <Grid item md={3}>
              <Paper></Paper>
            </Grid>
            {currentPosts.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "100%",
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="product-card"
              >
                <Link to={`/details/${item.id}`}>
                  <p>{item.name}</p>
                  <img
                    src={item.image}
                    className="img-product-list"
                    style={{ width: "80%", margin: "30px 0" }}
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </Container>
    </>
  );
};

export default ProductsList;
