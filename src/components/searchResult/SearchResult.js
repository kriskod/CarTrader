import React, { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./SearchResult.css";
function SearchResult({
  title,
  price,
  image,
  year,
  location,
  mileage,
  engine,
  fuel,
  createdAt,
}) {
  const [watch, setWatch] = useState([]);
  return (
    <div className="searchResult">
      <img
        className="searchResult_star"
        src={image}
        alt="searchResult__image"
      />
      {watch ? (
        <StarBorderIcon
          onClick={() => setWatch(!watch)}
          className="searchResult__star"
        />
      ) : (
        <StarIcon className="searchResult__star_full" />
      )}

      <div className="searchResult__info">
        <h3>{title}</h3>
        <div className="searchResult__info_main">
          <ul>
            <li>{year}</li>
            <li>{mileage}</li>
            <li>{engine}</li>
            <li>{fuel}</li>
          </ul>
        </div>
        <p>
          <small>$</small>
          {price}
        </p>
        <p className="searchResult__locationIcon">
          <LocationOnIcon />
          {location}
        </p>
        <p className="searchResult__date">{createdAt}</p>
      </div>
    </div>
  );
}

export default SearchResult;
