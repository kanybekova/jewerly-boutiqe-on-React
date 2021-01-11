import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom"

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-section-text" style={{margin:"100px 0",marginBottom:"10%",textAlign:"center", fontSize:"20px"}}>
        <p>НАШИ ЮВЕЛИРНЫЕ ИЗДЕЛИЯ</p>
        <h3>Откройте для себя наши коллекции, созданные вручную.</h3>
        <p>Украшения для защиты дикой природы</p>
      </div>
   

    <div style={{width:"100%"}} className="carousel-block">
    <Carousel
      className="carousel"
      slidesPerPage={2}
      slidesPerScroll={3}
      // infinite
      clickToChange
      centered
      // arrows
      breakpoints={{
        1000: {
          slidesPerPage: 2,
          clickToChange: true,
          centered: true,
          arrows: true,
          // infinite: true,
        },
        500: {
          slidesPerPage: 3,
          slidesPerScroll: 1,
          clickToChange: true,
          centered: true,
          animationSpeed: 2000,
          arrows: true,
          // infinite: true,
        },
      }}
    >
      <div style={{position:"absolute", bottom:"-200px"}} className="category1">
        <img
          className="category-carousel-img"
          src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/58182b9d0026b76715b69b6efd738733263633b9.jpg"
        />
        <div>
          <Link to="/rings">
          <button  className="category-btn" style={{ position: "relative", top: "-200px}" }}>Кольца</button>
          </Link>
        </div>
      </div>
      <div className="category1">
        <img
          className="category-carousel-img"
          src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/32a7474d6c8a1bd2c339031d20b3a15b09491bd5.jpg "
        />
        <div>
          <Link to="/earrings">
          <button  className="category-btn" style={{ position: "relative", top: "-200px}" }}>Серьги</button>
          </Link>
        </div>
      </div>
      <div style={{position:"absolute", bottom:"-180px"}} className="category1">
        <img
          className="category-carousel-img"
          src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/90d9c61ca91fa3b67174d26eef5e4afea3b02526.jpg"
        />
        <div>
          <Link to="/necklaces">
          <button  className="category-btn" style={{ position: "relative", top: "-200px}" }}>Ожерелья</button>
          </Link>
        </div>
      </div>
      <div style={{position:"absolute", bottom:"-100px"}} className="category1">
        <img
          className="category-carousel-img"
          src="https://faune-bijouterie.com/modules/custombanners/views/img/uploads/625d9ceea18994d69ee6c11ce0415bb0785acdad.jpg"
          alt=""
        />
        <div>
          <Link to="/bracelet">
          <button  className="category-btn" style={{ position: "relative", top: "-200px}" }}>Браслеты</button>
          </Link>
        </div>
      </div>
    </Carousel>
    </div>

    </div>
  );
};

export default CategorySection;
