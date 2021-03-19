import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import { Edit, Delete } from "@material-ui/icons";

function BackOfficeActivitiesItem({activity}) {

    return (
        <TableRow>
            <TableCell>
                {activity.name}
            </TableCell>
            <TableCell align="right">
                <IconButton color="primary" component="span">
                    <Edit />
                </IconButton>
                <IconButton color="secondary" component="span">
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default BackOfficeActivitiesItem;