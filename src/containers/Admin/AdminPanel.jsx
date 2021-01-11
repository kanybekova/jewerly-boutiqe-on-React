import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { adminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
    margin: "20px",
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const { products, getProducts, delProduct, getProductToEdit } = useContext(
    adminContext
  );

  useEffect(() => {
    getProducts();
  }, []);
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        // position: "relative",
        marginTop: "150px",
      }}
    >
      <div>
        <Link to="/admin-panel-add">
          <button>ADD PRODUCT</button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        {products.map((item) => (
          <Card className={classes.root}>
            <CardActionArea key={item.id}>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
                image={item.image}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.category}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.price}сом
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/admin-panel-edit">
                <Button
                  onClick={() => getProductToEdit(item.id)}
                  size="small"
                  color="primary"
                >
                  Редактировать
                </Button>
              </Link>
              <Button
                onClick={() => delProduct(item.id)}
                size="small"
                color="primary"
              >
                Удалить
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
