import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px ",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    cursor: "pointer",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  createOffer: {
    backgroundColor: "#901600",
    color: "white",
    fontWeight: 600,
  },
}));
