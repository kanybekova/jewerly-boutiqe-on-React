import React, { useState, useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/CalcPrice";
import { Modal, ModalBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaymentForm from "../Payment/Payment";
import Check from "../Check/Check";

const Cart = (props) => {
  const {
    cartData,
    getCart,
    changeCountProducts,
    deleteProductInCart,
    makeOrder,
    clearCartAfterPay,
  } = useContext(productsContext);
  useEffect(() => {
    getCart();
  }, []);

  function handleChangeCount(e, id) {
    changeCountProducts(e.target.value, id);
  }
  console.log(cartData);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => {
    setShow1(false);
    props.history.push("/");
    clearCartAfterPay();
  };

  function switcher(obj) {
    console.log(obj);
    if (
      !obj.cvc.trim() ||
      !obj.expiry.trim() ||
      !obj.name.trim() ||
      !obj.number.trim()
    ) {
      return alert("Заполните поля");
    } else {
      handleClose();
      handleShow1();
      localStorage.setItem("cart", null);
    }
  }

  return (
    <div>
      {!cartData ? (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <h3>К сожалению ваша корзина пуста</h3>
              <p>
                Исправить это недоразумение очень просто: выберите в каталоге
                интересующий товар и нажмите кнопку «В корзину».
              </p>
              <Link to="/products-list">
                <button>Вернуться</button>
              </Link>
            </div>
          </div>
        </div>
      ) : cartData.totalPrice ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="cart"
            style={{
              // position: "relative",
              width: "50%",
              display: "flex",
              marginTop: "150px",
              backgroundColor: "white",
              padding: "50px",
            }}
          >
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="img-th" style={{ paddingBottom: "20px" }}></th>
                  <th className="title-th">Название</th>
                  <th>Количество</th>
                  <th>Цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartData.products.map((item) => (
                  <tr key={item.product.id}>
                    <td>
                      <img
                        className="cart-img"
                        style={{ width: "200px", marginBottom: "20px" }}
                        src={item.product.image}
                      />
                    </td>
                    <td className="title-td">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "start",
                        }}
                      >
                        <h5>{item.product.name}</h5>
                        <p>Металл: {item.product.proba}</p>
                      </div>
                    </td>
                    <td>
                      <input
                        style={{ width: "60px" }}
                        onChange={(e) => handleChangeCount(e, item.product.id)}
                        value={item.count}
                        type="number"
                        value={item.count}
                      />
                    </td>
                    <td>{item.subPrice}сом</td>
                    <td className="cart-td">
                      <button
                        style={{ width: "150px" }}
                        onClick={() => deleteProductInCart(item)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-makeOrder" style={{ marginBottom: "100px" }}>
            <h2 className="h2">
              Итого: {calcTotalPrice(cartData.products)}cом
            </h2>
            <button
              onClick={(makeOrder, handleShow)}
              className="product-details-btn"
            >
              Оплатить
            </button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Оплатить картой</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <PaymentForm switcher={switcher} />
            </ModalBody>
          </Modal>

          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Чек</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <Check />
            </ModalBody>
          </Modal>
        </div>
      ) : (
        <>
          <div style={{ textAlign: "start" }}>
            <h3>К сожалению ваша корзина пуста</h3>
            <p>
              Исправить это недоразумение очень просто: выберите в каталоге
              интересующий товар и нажмите кнопку «В корзину».
            </p>
            <Link to="/products-list">
              <button>Вернуться</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
