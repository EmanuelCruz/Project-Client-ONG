import React from "react";
import { Button, TableCell, TableRow } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../styles/MaterialUiStyles";

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
          className={classes.buttonTableRow}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          className={classes.buttonTableRow}
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
