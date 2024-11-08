import makeStyles from "@mui/styles/makeStyles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
    paddingLeft: "16em",
    "@media (max-width:735px)": {
      paddingLeft: "2em",
    },
  },
}));
