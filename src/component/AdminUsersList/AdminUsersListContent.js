import React, { useEffect, useState } from 'react';
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
import { userList } from "../../services/querys/userServices";
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: 44,
  },
  tableContainer: {
    maxHeight: 475
  },
});

export default function BasicTable({ usersList }) {
  const [users, setUsers] = useState(usersList)
  const classes = useStyles();
  useEffect(() => {
    const fetchUsers = async () => {
      const dataUsers = await userList();
      setUsers(dataUsers);
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }
  const handleEdit = (id) => {
    //Cambiar los nuevos datos de usuario a la tabla
  }

  return (
    <Box m={2} p={2}>
      <h3>Usuarios</h3>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table" stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Apellido</strong></TableCell>
              <TableCell><strong>Correo</strong></TableCell>
              <TableCell><strong>Administrar</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.firstName}>
                <TableCell component="th" scope="row">{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell><EditButton id={user.id} handleEdit={handleEdit}/><DeleteButton id={user.id} handleDelete={handleDelete} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
