import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Paper
} from "@material-ui/core";
import useStyles from "./styled/MaterialUiStyles";
import ContactsTable from "./components/ContactsTable";
import { getContacts } from "../../services/querys/contactsService";

const BackOficceContactsComponent = () => {
  const classes = useStyles();
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getContacts();
      setContactsData(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Toolbar className={classes.rootBackOffice}>
        <Typography variant="h4" className={classes.title}>
          Contactos
        </Typography>
      </Toolbar>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell}>Celular</TableCell>
              <TableCell className={classes.tableCell}>Email</TableCell>
              <TableCell className={classes.tableCell}>Mensaje</TableCell>
              <TableCell className={classes.tableCell}>
                Fecha de creación
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!contactsData?.length &&
              contactsData.map((news) => (
                <ContactsTable key={news.id} contactData={news} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BackOficceContactsComponent;
