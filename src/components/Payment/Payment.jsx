import React from "react";
import { Button } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
// import './Payment.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(this.props);
    this.setState({ [name]: value });
  };

  //

  render(props) {
    return (
      <div className="payment" id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            required
            className="payment__input card__number"
            maxLength="16"
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            required
            className="payment__input card__name"
            type="text"
            name="name"
            placeholder="Cardholder Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            required
            className="payment__input card__cvc"
            maxLength="3"
            type="text"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            required
            className="payment__input card__expiry"
            maxLength="4"
            type="text"
            name="expiry"
            placeholder="expiry date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
        <div
          className="pay__btn"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            className="product-details-btn"
            type="submit"
            onClick={() => this.props.switcher(this.state)}
          >
            Оплатить
          </Button>
        </div>
      </div>
    );
  }
}
