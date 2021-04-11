import React from 'react'
import { deleteUser } from "../../../services/querys/userServices";
import { ConfirmAlertDeleteButtonComponent } from "../../Alert/AlertComponent";
import Swal from "sweetalert2";
import {
  CONFIRM,
  CONFIRM_IS_CONFIRMED,
  CONFIRM_SUCCESS,
  DELETE_CONFIRM_TITLE_USER,
} from "../../../const/const";


const DeleteButton = ({ userkey, id, handleDelete }) => {

  const handleClick = () => {
    ConfirmAlertDeleteButtonComponent(DELETE_CONFIRM_TITLE_USER).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
          deleteUser(id);
          handleDelete(id);
      }
  });
  }

  return (
    <button
      userkey={userkey}
      type="button"
      className="btn btn-delete"
      onClick={handleClick}
    >Eliminar</button>
  )
}

export default DeleteButton;