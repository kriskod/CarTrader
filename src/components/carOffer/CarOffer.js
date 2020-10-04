import React from "react";
import "./CarOffer.css";

function CarOffer({ title, price, description, image }) {
  return (
    <div className="carOffer">
      <img src={image} alt="car_offer_image" />
      <div className="carOffer__info">
        <div className="carOffer__title">{title}</div>
        <div className="carOffer__description">{description}</div>
        <div className="carOffer__price">
          <small>$</small>
          {price}
        </div>
      </div>
    </div>
  );
}

export default CarOffer;
