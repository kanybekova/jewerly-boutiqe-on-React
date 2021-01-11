import React from "react";
import { Link } from "react-router-dom";

const WelcomeImages = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        justifyContent: "center",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          width: "45%",
          maxWidth: "700px",
          padding: "30px",
          flex: " 0 0 45%",
        }}
        className="img1"
      >
        <div style={{ position: "relative" }}>
          <img
            style={{
              display: "inline-block",
              maxWidth: "100%",
              height: "auto",
            }}
            src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/6df5535e027611ff8516fcfb763fb5ca14443e2a.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          width: "80%",
          maxWidth: "900px",
          padding: "30px",
          flex: "0 0 50%",
        }}
        className="img2"
      >
        <div style={{ position: "relative" }}>
          <img
            style={{
              display: "inline-block",
              maxWidth: "100%",
              height: "auto",
            }}
            src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/4f58c2cf7e0b533f3ef299dfd6ee5a8e98ea85fc.jpg"
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          width: "45%",
          maxWidth: "700px",
          padding: "30px",
          flex: "0 0 45%",
        }}
        className="img3"
      >
        <div style={{ position: "relative" }}>
          <img
            style={{
              display: "inline-block",
              maxWidth: "100%",
              height: "auto",
            }}
            src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/fdae5b2d9023933cd4c76438706b16d261ddca01.jpg"
            alt=""
          />
        </div>
      </div>

      <div style={{ position: "absolute" }}>
        <div
          style={{
            position: "relative",
            color: "#3498db",
            textAlign: "center",
          }}
        >
          <h4>Н О В А Я К О Л Л Е К Ц И Я</h4>
          <h2
            className="colection-title"
            style={{ fontWeight: "700", margin: "0" }}
          >
            SS22
          </h2>
          <p>
            <a href="/products-list" className="catalog">
              Каталог
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImages;
