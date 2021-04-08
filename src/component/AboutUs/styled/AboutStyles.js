import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3em",
    marginTop: ".7rem",
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
  subtitle: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  image: {
    width: "60%"
  },
  typography: {
    fontFamily: [
      '"Nunito"',
    ].join(','),
  },
}));

export default useStyles;
