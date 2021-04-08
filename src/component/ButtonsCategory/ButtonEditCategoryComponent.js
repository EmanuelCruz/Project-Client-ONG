import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { ConfirmAlertDeleteButtonComponent } from "../Alert/AlertComponent";
import Swal from "sweetalert2";
import {
  CONFIRM,
  CONFIRM_IS_CONFIRMED,
  CONFIRM_SUCCESS,
  DELETE_CONFIRM_TITLE_CATEGORY,
} from "../../const/const";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

function ButtonEditCategoryComponent({ category }) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/backoffice/edit-category/" + category.id);
  };

  return (
    <IconButton color="secondary" align="left" onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
}

export default ButtonEditCategoryComponent;
