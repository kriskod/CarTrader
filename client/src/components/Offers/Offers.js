import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Offer from "./Offer/Offer";

const Offers = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Offer />
    </Grid>
  );
};

export default Offers;
