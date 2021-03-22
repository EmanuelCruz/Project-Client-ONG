import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 750,
  },
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
}));

export default useStyles;
