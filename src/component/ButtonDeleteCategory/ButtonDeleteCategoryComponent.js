import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import { ConfirmAlertDeleteButtonComponent } from "../Alert/AlertComponent";
import Swal from "sweetalert2";
import {
    CONFIRM,
    CONFIRM_IS_CONFIRMED,
    CONFIRM_SUCCESS,
    DELETE_CONFIRM_TITLE_CATEGORY,
} from "../../const/const";
import { deleteCategory } from "../../services/querys/categoriesServices";

function ButtonDeleteCategoryComponent({ category }) {
    const handleClick = () => {
        ConfirmAlertDeleteButtonComponent(DELETE_CONFIRM_TITLE_CATEGORY).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
                deleteCategory(category.id);
            }
        });
    };

    return (
        <IconButton color="secondary" component="span" onClick={handleClick}>
            <Delete />
        </IconButton>
    );
}

export default ButtonDeleteCategoryComponent;
