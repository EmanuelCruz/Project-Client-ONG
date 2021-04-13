import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Table,
  Box,
} from "@material-ui/core";
import { getMembersList } from "../../services/querys/membersServices";
import MembersTable from "./components/MembersTable";
import useStyles from "./styled/MembersStyled";

const BackOfficeMembersComponent = () => {
  const classes = useStyles();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getMembersList();
      const { data } = response;
      const reverseData = data.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      setMembers(reverseData);
    };
    fetchApi();
  }, []);

  return (
    <Box m={2} p={2}>
      <h3>
        Miembros
      </h3>
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
                <MembersTable
                  key={member.id}
                  members={member}
                  newMembers={members}
                  setMembers={setMembers}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BackOfficeMembersComponent;
