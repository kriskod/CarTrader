import React from "react";
import useStyles from "./styles";
import { Paper, Typography, Button } from "@material-ui/core";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.welcome} variant="h2" align="center">
          Welcome to C<span className={classes.color}>a</span>rTr
          <span className={classes.color}>a</span>der
        </Typography>
        <Typography variant="h4" align="center">
          Find your dream car for best price. <br />
          Checkout a thousands offers from all people around the world and join
          the CarTrader community to post your offers.
        </Typography>
        <Button
          className={classes.explore}
          component={Link}
          to="/"
          variant="outlined"
        >
          Explore
        </Button>

        <img className={classes.banner} src={banner} alt="cartrader banner" />
      </Paper>
    </div>
  );
};

export default Dashboard;
