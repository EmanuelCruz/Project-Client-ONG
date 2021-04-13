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
import NoItemsComponent from "../NoItems/NoItemsComponent";

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


  if (!!contactsData?.length >= 1) {
    return (
      <>
        <Toolbar className={classes.rootBackOffice}>
          <h3>Contactos</h3>
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
    )
  } else return (
    <NoItemsComponent item="contactos" />
  )
};

export default BackOficceContactsComponent;
