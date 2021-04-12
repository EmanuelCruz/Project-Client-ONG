import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 750,
  },
  tableContainer: {
    maxHeight: 475,
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
}));

export default useStyles;
