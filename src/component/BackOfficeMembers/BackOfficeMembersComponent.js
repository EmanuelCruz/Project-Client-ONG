import React, { useEffect, useState } from "react";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Table,
} from "@material-ui/core";
import { getMembersList } from "../../services/querys/membersServices";
import MembersTable from "./components/MembersTable";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styled/MembersStyled";

const BackOfficeMembersComponent = () => {
  const [members, setMembers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getMembersList();
      setMembers(response.data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <Toolbar>
        <Typography variant="h4" className={classes.title} align="left">
          Miembros
        </Typography>
        <Button endIcon={<AddIcon />} className="btn btn-primary">Agregar nuevo miembro</Button>
      </Toolbar>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Imagen</strong>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!members?.length &&
              members.map((member) => (
                <MembersTable key={member.id} members={member} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BackOfficeMembersComponent;
