import React from "react";
import Swal from "sweetalert2";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "../styles/MaterialUiStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import apiServices from "../../../services/querys/apiServices";
import { Button, TableCell, TableRow } from "@material-ui/core";
import { ConfirmAlertComponent } from "../../Alert/AlertComponent";
import {
  CONFIRM_IS_CONFIRMED,
  CONFIRM_SUCCESS,
  CONFIRM,
} from "../../../const/const";

const TableRowItem = ({ news, setNewsData }) => {
  const classes = useStyles();

  const { id, name, image, createdAt } = news;

  const handleDelete = (idNew) => {
    ConfirmAlertComponent().then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
      }
    });
  };
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell>
        {new Date(createdAt).toISOString().substring(0, 10)}
      </TableCell>
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
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
