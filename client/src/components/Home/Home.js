import {
  Button,
  Container,
  Fade,
  Grid,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import useStyles from "./styles";

import banner from "../../assets/banner-cars.jpg";
import Offers from "../Offers/Offers";
const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <>
      <div className={classes.banner}>
        <img src={banner} alt="CarTrader banner" />
      </div>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.filterPosition}>
              <Paper className={classes.filters}>
                <Typography className={classes.title} variant="h5">
                  What do You looking for?
                </Typography>
                <form className={classes.filterForm}>
                  <TextField
                    className={classes.label}
                    label="Brand"
                    type="text"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.label}
                    label="Model"
                    type="text"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Min year"
                    type="text"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Max year"
                    type="text"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Min price"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Max price"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Min mileage"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Max mileage"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Min engine cap"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.slabel}
                    label="Max engine cap"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.label}
                    label="Fuel type"
                    type="text"
                    variant="outlined"
                  />
                  <Button className={classes.submitButton} variant="contained">
                    <SearchIcon />
                    Search
                  </Button>
                </form>
              </Paper>
            </div>
          </Fade>
        )}
      </Popper>
      <Grid container justify="center">
        <Grid item>
          <Button
            className={classes.cartraderButton}
            onClick={handleClick("bottom")}
            variant="contained"
          >
            Filter Options
            <ExpandMoreIcon />
          </Button>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Offers />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
