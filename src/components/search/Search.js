import React, { useState } from "react";
import "./Search.css";
function Search() {
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [mileageFrom, setMileageFrom] = useState(0);
  const [mileageTo, setMileageTo] = useState(0);
  const [yearFrom, setYearFrom] = useState(0);
  const [yearTo, setYearTo] = useState(0);
  return (
    <div className="search">
      <ul className="search__options">
        <li>
          <input type="text" placeholder="Type" />
          <input type="text" placeholder="Brand" />
          <input type="text" placeholder="Model" />
        </li>
        <li>
          <ul className="search__optionsShort">
            <input type="text" placeholder="Price To" />
            <input type="text" placeholder="Price to" />
          </ul>
          <ul className="search__optionsShort">
            <input type="text" placeholder="Mileage from" />
            <input type="text" placeholder="Mileage to" />
          </ul>

          <ul className="search__optionsShort">
            <input type="text" placeholder="Year from" />
            <input type="text" placeholder="Year to" />
          </ul>
        </li>
        <li>
          <input type="text" placeholder="Fuel type" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Engine" />
        </li>
      </ul>
    </div>
  );
}

export default Search;
