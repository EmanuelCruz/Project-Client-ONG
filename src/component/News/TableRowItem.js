import React from "react";
import { Button, makeStyles, TableCell, TableRow } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  tableButtons: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    display: "flex",
    justifyContent: "center",
  },
}));

const TableRowItem = ({ name, image, date }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell>{new Date(date).toISOString().substring(0, 10)}</TableCell>
      <TableCell className={classes.tableButtons}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          className={classes.button}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          className={classes.button}
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
