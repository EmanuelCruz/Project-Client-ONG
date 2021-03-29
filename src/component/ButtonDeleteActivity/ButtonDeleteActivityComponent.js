import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import { ConfirmAlertDeleteButtonComponent } from "../Alert/AlertComponent";
import { deleteActivity } from "../../services/querys/activitiesServices";
import Swal from "sweetalert2";
import {
    CONFIRM,
    CONFIRM_IS_CONFIRMED,
    CONFIRM_SUCCESS,
    DELETE_CONFIRM_TITLE_ACTIVITY,
} from "../../const/const";

function ButtonDeleteActivityComponent({ activity, handleDeleteActivity }) {
    const handleClick = () => {
        ConfirmAlertDeleteButtonComponent(DELETE_CONFIRM_TITLE_ACTIVITY).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
                deleteActivity(activity.id);
                handleDeleteActivity(activity.id); //Just for testing
            }
        });
    };

    return (
        <IconButton color="secondary" component="span" onClick={handleClick}>
            <Delete />
        </IconButton>
    );
}

export default ButtonDeleteActivityComponent;
