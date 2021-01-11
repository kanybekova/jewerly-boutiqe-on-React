import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../contexts/AdminContext";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const AdminPanelEdit = (props) => {
  const { productToEdit, editProduct } = useContext(adminContext);
  const [newProduct, setNewProduct] = useState(productToEdit);

  useEffect(() => {
    setNewProduct(productToEdit);
  }, [productToEdit]);

  function updateProduct(e) {
    let obj = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(obj);
  }

  function validateInput() {
    if (
      !newProduct.price ||
      !newProduct.name.trim() ||
      !newProduct.description.trim() ||
      !newProduct.proba.trim() ||
      !newProduct.image.trim()
    ) {
      return alert("Заполните поля!!!");
    } else {
      editProduct(newProduct, props.history);
    }
  }

  return (
    <Grid>
      {newProduct ? (
        <div
          style={{
            // position: "relative",
            marginTop: "150px",
            left: "5%",
            padding: "5%",
          }}
          className="admin-panel"
        >
          <select
            defaultValue={newProduct.category}
            name="jewerly-category"
            className="jewerly-category"
            id=""
            onChange={updateProduct}
          >
            <option value="">Выбрать категорию</option>
            <option value="rigns">Кольца</option>
            <option value="earrings">Серьги</option>
            <option value="bracelet">Браслеты</option>
            <option value="Necklaces">Ожерелья</option>
          </select>

          <p>Название</p>
          <TextField
            style={{ marginBottom: "15px", borderRadius: "0%" }}
            className="admin-input"
            onChange={updateProduct}
            name="name"
            id="outlined-secondary"
            variant="outlined"
            value={newProduct.name}
            color="secondary"
          />
          <p>Цена</p>
          <TextField
            style={{ marginBottom: "15px", borderRadius: "0%" }}
            className="admin-input"
            onChange={updateProduct}
            name="price"
            id="outlined-secondary"
            variant="outlined"
            value={newProduct.price}
            color="secondary"
          />
          <p>Проба</p>
          <TextField
            style={{ marginBottom: "15px", borderRadius: "0%" }}
            className="admin-input"
            onChange={updateProduct}
            name="proba"
            id="outlined-secondary"
            variant="outlined"
            value={newProduct.proba}
            color="secondary"
          />
          <p>Изображение</p>
          <TextField
            style={{ marginBottom: "15px", borderRadius: "0%" }}
            className="admin-input"
            onChange={updateProduct}
            name="image"
            id="outlined-secondary"
            variant="outlined"
            value={newProduct.image}
            color="secondary"
          />
          <p>Описание</p>
          <TextField
            style={{ marginBottom: "15px", borderRadius: "0%" }}
            className="admin-input"
            onChange={updateProduct}
            name="description"
            id="outlined-secondary"
            variant="outlined"
            value={newProduct.description}
            color="secondary"
          />
          <button className="inputs" onClick={validateInput}>
            Edit
          </button>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </Grid>
  );
};

export default AdminPanelEdit;
