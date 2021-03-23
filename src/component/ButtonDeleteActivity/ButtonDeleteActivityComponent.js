import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import { ConfirmAlertDeleteActivtyComponent } from "../Alert/AlertComponent";
import { deleteActivity } from "../../services/querys/activitiesServices";
import Swal from "sweetalert2";
import {
    CONFIRM,
    CONFIRM_IS_CONFIRMED,
    CONFIRM_SUCCESS,
} from "../../const/const";

function ButtonDeleteActivityComponent({ activity, handleDeleteActivity }) {
    const handleClick = () => {
        ConfirmAlertDeleteActivtyComponent().then((result) => {
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
