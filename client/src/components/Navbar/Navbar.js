import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import logo from "../../assets/cartrader_logo2.png";
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const [accountMenu, setAccountMenu] = useState(null);

  const handleClick = (event) => {
    setAccountMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAccountMenu(null);
  };

  const user = false;
  return (
    <AppBar className={classes.appbar} color="inherit" position="fixed">
      <div className={classes.logoContainer}>
        <Button component={Link} to="/">
          <img className={classes.logo} src={logo} alt="Cartrader logo" />
        </Button>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <IconButton>
              <StarBorderOutlined />
            </IconButton>
            <Button
              aria-controls="account"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <PermIdentityIcon />
              Account
              <ExpandMoreIcon />
            </Button>
            <Menu
              elevation={3}
              id="account"
              anchorEl={accountMenu}
              keepMounted
              open={Boolean(accountMenu)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Button className={classes.createOffer}>Create Offer</Button>
          </div>
        ) : (
          <Button
            className={classes.createOffer}
            component={Link}
            to="/register"
          >
            Join CarTrader
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
