import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const MembersTable = ({ members }) => {
  const { name, image } = members;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell align="right">
        <button className="btn btn-primary">Editar</button>
        <button className="btn btn-delete">Eliminar</button>
      </TableCell>
    </TableRow>
  );
};

export default MembersTable;
