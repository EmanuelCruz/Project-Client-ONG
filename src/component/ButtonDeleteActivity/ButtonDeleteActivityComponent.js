import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { myStyles } from './ButtonDeleteActivityStyles';
import Swal from 'sweetalert2';

export default function ButtonDeleteActivityComponent({ id = 1 }) {
    const classes = myStyles();
    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    );
}
