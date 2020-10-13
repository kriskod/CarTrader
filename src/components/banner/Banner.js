import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Search from "../search/Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [search, setSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {search && <Search />}
        <Button
          onClick={() => setSearch(!search)}
          className="banner__filter"
          variant="outlined"
        >
          {search ? "Hide Filter" : "Show Filter"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Welcome to CARTRADER</h1>
        <h3>Find, Choose, Negociate, Buy or Sell</h3>
        <h5>Checkout an offers below of thousands of cars</h5>
        <Button
          onClick={() => history.push("/search-results")}
          variant="outlined"
        >
          Find your car, or sell one!
        </Button>
      </div>
    </div>
  );
}

export default Banner;
