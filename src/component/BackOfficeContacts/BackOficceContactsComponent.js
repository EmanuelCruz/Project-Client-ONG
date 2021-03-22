import React, { useEffect, useState } from "react";
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
import { getContacts } from "../../services/querys/contactsService";

const BackOficceContactsComponent = () => {
  const classes = useStyles();
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getContacts();
      console.log(data);
      setContactsData(data);
    };
    fetchApi();
  }, []);

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
              <TableCell className={classes.tableCell}>nombre</TableCell>
              <TableCell className={classes.tableCell}>celular</TableCell>
              <TableCell className={classes.tableCell}>email</TableCell>
              <TableCell className={classes.tableCell}>message</TableCell>
              <TableCell className={classes.tableCell}>
                fecha de eliminación
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
    </Paper>
  );
};

export default BackOficceContactsComponent;
