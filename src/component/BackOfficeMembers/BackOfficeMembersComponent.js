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
import Modal from "@material-ui/core/Modal";
import ModalComponent from "./components/ModalComponent";

const BackOfficeMembersComponent = () => {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getMembersList();
      const { data } = response;
      const reverseData = data.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      setMembers(reverseData);
    };
    fetchApi();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Toolbar>
        <Typography variant="h4" className={classes.title} align="left">
          Miembros
        </Typography>
        <Button
          endIcon={<AddIcon />}
          className="btn btn-primary"
          onClick={handleOpen}
        >
          Agregar nuevo miembro
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalComponent
            title="Agregar nuevo miembro"
            name="name"
            image="image"
            setMembers={setMembers}
            handleClose={handleClose}
          />
        </Modal>
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
    </>
  );
};

export default BackOfficeMembersComponent;
