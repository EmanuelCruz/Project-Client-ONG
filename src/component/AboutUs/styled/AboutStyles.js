import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3em",
    marginTop: "1rem",
    marginBottom: "1rem",
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
    width: '80%',
    display: 'inline-block',
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
