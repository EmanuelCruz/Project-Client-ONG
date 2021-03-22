import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import BackOfficeActivityItem from "./BackOfficeActivitiesItem";

function BackOfficeActivitiesList({activities ,handleDeleteActivity}) {
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableBody>
                    {activities.map((activity) => (
                        <BackOfficeActivityItem key={activity.id} activity={activity} handleDeleteActivity={handleDeleteActivity} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BackOfficeActivitiesList;