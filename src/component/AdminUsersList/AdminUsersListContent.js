import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteButton from "./Buttons/DeleteButton";
import EditButton from "./Buttons/EditButton";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  { name: 'John', surname: 'Smith', email: 'johnsmith@gmail.com' },
  { name: 'Tom', surname: 'Taylor', email: 'tomtaylor@gmail.com' },
  { name: 'Mike', surname: 'Thompson', email: 'mikethompson@gmail.com' },
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h3>Usuarios:</h3>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Apellido</strong></TableCell>
            <TableCell><strong>Correo</strong></TableCell>
            <TableCell><strong>Administrar</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell><EditButton /><DeleteButton /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
