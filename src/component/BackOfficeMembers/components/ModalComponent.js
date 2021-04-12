import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../styled/MembersStyled";
import {
  createMembers,
  getMembersList,
} from "../../../services/querys/membersServices";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ModalComponent = ({ title, name, setMembers }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createMembers({
      name: nameInput,
      image: imageInput,
    });

    setTimeout(async () => {
      setNameInput("");
      setImageInput("");
      const response = await getMembersList();
      setMembers(response.data);
    }, 2000);
  };
  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <div id="simple-modal-description">
        <form
          autoComplete="off"
          className={classes.formContainer}
          onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            label={name}
            variant="outlined"
            autoComplete="off"
            fullWidth
            className="input input-name"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          >
            Nombre
          </TextField>
          <TextField
            id="image"
            type="file"
            fullWidth
            variant="outlined"
            className="input input-image"
            onChange={(e) => setImageInput(e.target.value)}
            value={imageInput}
          >
            Imagen
          </TextField>
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
