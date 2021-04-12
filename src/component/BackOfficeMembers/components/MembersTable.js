import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { deleteMember } from "../../../services/querys/membersServices";

const MembersTable = ({ members, setMembers, newMembers }) => {
  const { id, name, image } = members;

  const handleDelete = async (id) => {
    await deleteMember(id);
    console.log(members);
    const data = newMembers.filter((m) => m.id !== id);
    setMembers(data);
  };
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell align="left">
        <button className="btn btn-delete" onClick={() => handleDelete(id)}>
          Eliminar
        </button>
      </TableCell>
    </TableRow>
  );
};

export default MembersTable;
