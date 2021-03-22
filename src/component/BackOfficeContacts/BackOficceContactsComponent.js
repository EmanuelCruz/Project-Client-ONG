import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styled/MaterialUiStyles";
import ContactsTable from "./components/ContactsTable";

const BackOficceContactsComponent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.tableContainer}>
      <Toolbar className={classes.rootBackOffice}>
        <Typography variant="h4" className={classes.title}>
          Contactos
        </Typography>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>id</TableCell>
              <TableCell className={classes.tableCell}>nombre</TableCell>
              <TableCell className={classes.tableCell}>celular</TableCell>
              <TableCell className={classes.tableCell}>email</TableCell>
              <TableCell className={classes.tableCell}>message</TableCell>
              <TableCell className={classes.tableCell}>
                fecha de eliminación
              </TableCell>
              <TableCell className={classes.tableCell}>
                fecha de creación
              </TableCell>
              <TableCell className={classes.tableCell}>
                fecha de actualización
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ContactsTable />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BackOficceContactsComponent;
