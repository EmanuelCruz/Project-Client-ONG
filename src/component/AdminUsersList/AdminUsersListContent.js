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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({usersList}) {
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
          {users.map((user) => (
            <TableRow key={user.firstName}>
              <TableCell component="th" scope="row">{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><EditButton /><DeleteButton id={user.id} handleDelete={handleDelete}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
