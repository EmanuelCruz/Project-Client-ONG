import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const ContactsTable = () => {
  return (
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>John</TableCell>
      <TableCell>114444444</TableCell>
      <TableCell>example@example.com</TableCell>
      <TableCell>Example Message</TableCell>
      <TableCell>2021-03-19</TableCell>
      <TableCell>2021-03-19</TableCell>
      <TableCell>2021-03-19</TableCell>
    </TableRow>
  );
};

export default ContactsTable;
