import React from "react";

const ContactSection = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "12%",
      }}
    >
      <div className="contactSection">
        <div style={{ width: "50%" }}>
          <img
            style={{ width: "100%" }}
            src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/5babfce9030ba36c51b1eebd6bd3a5b318dfa807.jpg"
            alt=""
          />
        </div>
        <div style={{ width: "50%" }}>
          <div className="contact-block">
            <p className="paragraph-contact-block">
              Реставрация и изготовление{" "}
            </p>
            <h2> ЮВЕЛИРНЫХ ИЗДЕЛИЙ</h2>
            <p className="paragraph-contact-block">
              Мы преображаем старые украшения и создаем новые ювелирные изделия
              на заказ,с 18-каратным золотом, камнями и мелким жемчугом. С
              вашими пожеланиями, с нашими техническими,эстетическими знаниями,
              вместе мы создадим уникальное украшение.
            </p>
            <button className="contact-btn">Связаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
