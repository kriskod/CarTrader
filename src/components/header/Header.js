import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/cartrader_logo2.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState("");
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__info">
        {user ? (
          <Link className="header__signup" to="/signup">
            <p>{user}</p>
          </Link>
        ) : (
          <Link className="header__signup" to="/signup">
            <p>Become a trader</p>
          </Link>
        )}

        <ExpandMoreIcon className="header__expand" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
