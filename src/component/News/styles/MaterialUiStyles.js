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
  // BackOfficeNewsComponent
  rootBackOffice: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
  tableCell: {
    fontWeight: 600,
    fontSize: "16px",
  },
  tableContainer: {
    marginTop: "3rem",
  },
  // TableRowItem
  buttonTableRow: {
    margin: theme.spacing(1),
  },
  tableButtons: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    display: "flex",
    justifyContent: "center",
  },
  error: {
    color: "red"
  },
  image: {
    width: "100%"
  },
  //Others
  cardCenterStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
