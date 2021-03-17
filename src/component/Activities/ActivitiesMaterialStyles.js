import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  button: {
    display: "inline",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "block",
  },
}));

export default useStyles;
