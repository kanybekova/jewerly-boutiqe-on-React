import React, { useContext, useState } from "react";
import { adminContext } from "../../contexts/AdminContext";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const AdminPanelAdd = (props) => {
  const { addProduct } = useContext(adminContext);
  const [product, setProduct] = useState({});

  const createNewProduct = (e) => {
    let newObj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newObj);
  };
  console.log(product);

  function validateInput() {
    if (
      !product.price ||
      !product.name.trim() ||
      !product.image.trim() ||
      !product.proba.trim() ||
      !product.description.trim()
    ) {
      return alert("Заполните поля!!!");
    } else {
      addProduct(product, props.history);
    }
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  return (
    <Grid>
      <div
        className="admin-panel"
        style={{
          // position: "relative",
          marginTop: "150px",
          padding: "5%",
        }}
      >
        <select
          className="jewerly-category"
          name="jewerly-category"
          id=""
          onChange={createNewProduct}
        >
          <option value="">Выбрать категорию</option>
          <option value="rigns">Кольца</option>
          <option value="earrings">Серьги</option>
          <option value="bracelet">Браслеты</option>
          <option value="necklaces">Ожерелья</option>
        </select>
        <p>Название</p>
        <TextField
          style={{ marginBottom: "15px", borderRadius: "0%" }}
          className="admin-input"
          onChange={createNewProduct}
          name="name"
          id="outlined-secondary"
          label="Outned secondary"
          variant="outlined"
          color="secondary"
        />
        <p>Цена</p>
        <TextField
          style={{ marginBottom: "15px", borderRadius: "0%" }}
          className="admin-input"
          onChange={createNewProduct}
          name="price"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
        />
        <p>Проба</p>
        <TextField
          style={{ marginBottom: "15px", borderRadius: "0%" }}
          className="admin-input"
          onChange={createNewProduct}
          name="proba"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
        />
        <p>Изображение</p>
        <TextField
          style={{ marginBottom: "15px", borderRadius: "0%" }}
          className="admin-input"
          onChange={createNewProduct}
          name="image"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
        />
        <p>Описание</p>
        <TextField
          style={{ marginBottom: "15px", borderRadius: "0%" }}
          className="admin-input"
          onChange={createNewProduct}
          name="description"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
        />
        {/* <div style={{ position: "absolute" }}> */}
          {/* <div style={{ position: "relative" }}> */}
            <button onClick={validateInput} className="admin-btn">
              Сохранить
            </button>
          {/* </div> */}
        {/* </div> */}
      </div>
    </Grid>
  );
};

export default AdminPanelAdd;
