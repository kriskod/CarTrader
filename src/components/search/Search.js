import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Search.css";
function Search() {
  const history = useHistory();
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
      <Button
        onClick={() => history.push("/search-results")}
        className="search__button"
      >
        Search
      </Button>
    </div>
  );
}

export default Search;
