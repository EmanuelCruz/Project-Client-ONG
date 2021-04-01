import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "3rem",
    textAlign: "left",
  },
  title: {
    fontSize: "3em",
    marginBottom: ".7rem",
  },
  root: {
    width: 280,
    margin: ".7rem",
  },
  media: {
    height: 290,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  containerTeam: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  paragraph: {
    textIndent: ".7rem",
  },
}));

export default useStyles;
