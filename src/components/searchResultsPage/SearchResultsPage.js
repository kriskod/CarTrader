import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../searchResult/SearchResult";
import "./SearchResultsPage.css";
function SearchResultsPage({
  type,
  model,
  brand,
  mileage,
  year,
  price,
  fuel,
  count,
}) {
  return (
    <div className="searchResultsPage">
      <div className="searchResultsPage__info">
        <p>filters options choosen</p>
        <h2>Found: {count} results</h2>
        <Button variant="outlined">Type</Button>
        <Button variant="outlined">Model</Button>
        <Button variant="outlined">Brand</Button>
        <Button variant="outlined">Mileage</Button>
        <Button variant="outlined">Year</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Fuel</Button>
      </div>
      <div className="searchResultsPage__results">
        <SearchResult
          title="Toyota Corolla, 120Hp, 2009, perfect car"
          price="12450"
          carImage="https://upload.wikimedia.org/wikipedia/commons/7/7a/2009_Toyota_Corolla_LE.jpg"
          year="2009"
          location="Prague, Czech"
          mileage="129000 km"
          engine="1600cm"
          fuel="Gas"
          createdAt={new Date().toDateString()}
        />
        <SearchResult
          title="Totyota Corolla, 120Hp, 2009, perfect car"
          price="12450"
          carImage="https://upload.wikimedia.org/wikipedia/commons/7/7a/2009_Toyota_Corolla_LE.jpg"
          year="2009"
          location="Prague, Czech"
          mileage="129000 km"
          engine="1600cm"
          fuel="Gas"
          createdAt={new Date().toDateString()}
        />
      </div>
    </div>
  );
}

export default SearchResultsPage;
