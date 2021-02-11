import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  welcome: {
    marginBottom: "10px",
    fontWeight: "bolder",
  },
  color: {
    color: "#901600",
  },
  banner: {
    width: "100%",
    height: "auto",
  },
  explore: {
    padding: 20,
    width: "150px",
    marginTop: "30px",
    marginBottom: "-50px",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "white",
    backgroundColor: "#901600",
  },
  paper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
  },
}));
