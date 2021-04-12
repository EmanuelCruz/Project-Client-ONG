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
} from "@material-ui/core";
import { getMembersList } from "../../services/querys/membersServices";
import MembersTable from "./components/MembersTable";
import AddIcon from "@material-ui/icons/Add";

const BackOfficeMembersComponent = () => {
  const [members, setMembers] = useState([]);

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
        <Typography variant="h4">Miembros</Typography>
        <div>
          <Button endIcon={<AddIcon />}>Agregar nuevo miembro</Button>
        </div>
      </Toolbar>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Nombre y Apellidos</TableCell>
            <TableCell>Imagen</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!members?.length &&
            members.map((member) => (
              <MembersTable key={member.id} members={member} />
            ))}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default BackOfficeMembersComponent;
