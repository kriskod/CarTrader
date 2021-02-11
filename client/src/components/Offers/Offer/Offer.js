import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Offer = () => {
  const classes = useStyles();
  return (
    <Card classname={classes.card}>
      <CardMedia className={classes.media} />
      <CardContent>
        <Typography>title</Typography>
        <Typography variant="body2">reszta</Typography>
      </CardContent>
    </Card>
  );
};

export default Offer;
