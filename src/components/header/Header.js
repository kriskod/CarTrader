import React from "react";
import "./Header.css";
import logo from "../../assets/cartrader_logo2.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__info">
        <p>Become a trader</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
