import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  banner: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  filterPosition: {
    display: "flex",
    justifyContent: "center",
  },
  filters: {
    padding: 10,
    width: "65%",
  },
  label: {
    padding: 10,
  },
  slabel: {
    padding: 10,
  },
  submitButton: {
    padding: 15,
    margin: 10,
    width: "223px",
    backgroundColor: "#901600",
    color: "white",
    fontWeight: 700,
  },
  cartraderButton: {
    backgroundColor: "#901600",
    color: "white",
    fontWeight: 700,
  },
}));
