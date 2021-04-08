import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2em",
    marginBottom: ".7rem",
    fontFamily: "Nunito",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 25,
    height: 25,
  },
}));

export default useStyles;
