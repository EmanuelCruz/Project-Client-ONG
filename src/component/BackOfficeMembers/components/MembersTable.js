import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const MembersTable = ({ members }) => {
  const { name, image } = members;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell>edit - delete</TableCell>
    </TableRow>
  );
};

export default MembersTable;
