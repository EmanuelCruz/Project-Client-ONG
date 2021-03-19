import React from "react";
import IconButton from '@material-ui/core/IconButton';
import { Delete } from "@material-ui/icons";
import {ConfirmAlertDeleteActivtyComponent} from '../Alert/AlertComponent'
import {deleteActivity} from '../../services/querys/activitiesServices'
import Swal from 'sweetalert2';
import {CONFIRM,CONFIRM_IS_CONFIRMED,CONFIRM_SUCCESS} from '../../const/const'

export default function ButtonDeleteActivityComponent({ id }) {

    const handleDeleteActivity = () => {
        ConfirmAlertDeleteActivtyComponent(id)
            .then((result) => {
                if (result.isConfirmed) {
                    deleteActivity(id);
                    Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
                }
            })
        ;
    };

    return (
        <IconButton color="secondary" component="span" onClick={()=>handleDeleteActivity()}>
            <Delete />
        </IconButton>
    );
}
