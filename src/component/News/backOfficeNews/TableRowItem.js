import React from "react";
import Swal from "sweetalert2";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "../styles/MaterialUiStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, TableCell, TableRow } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { ConfirmAlertComponent } from "../../Alert/AlertComponent";
import {
  CONFIRM_IS_CONFIRMED,
  CONFIRM_SUCCESS,
  CONFIRM,
} from "../../../const/const";
import { deleteNews } from "../../../services/querys/newsServices";

const TableRowItem = ({ news, newsData, setNewsData }) => {
  const classes = useStyles();
  const { id, name, image, createdAt } = news;

  const handleDelete = (idNew) => {
    ConfirmAlertComponent().then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
        deleteNews(idNew);
        setNewsData(newsData.filter((n) => n.id !== idNew));
      }
    });
  };
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Avatar variant="square" src={image}></Avatar>
      </TableCell>
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
