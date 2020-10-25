import React from "react";
import "./CarOffer.css";

function CarOffer({ title, price, year, mileage, fuel, engine, image }) {
  return (
    <div className="carOffer">
      <div className="carOffer__image">
        <img src={image} alt="offer_image" />
      </div>
      <div className="carOffer__title">
        <p>{title}</p>
      </div>
      <div className="carOffer__more">
        <ul>
          <li>
            <span>{year}</span>
          </li>
          <li>
            <span>{mileage} km</span>
          </li>
          <li>
            <span>{fuel}</span>
          </li>
          <li>
            <span>{engine} cm</span>
          </li>
        </ul>
      </div>
      <div className="carOffer__price">
        <p>
          <span>
            <small>$</small>
            {price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CarOffer;
