import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../styled/MembersStyled";

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

const ModalComponent = ({ title, name }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <div id="simple-modal-description">
        <form autoComplete="off" className={classes.formContainer}>
          <TextField
            id="name"
            label={name}
            variant="outlined"
            autoComplete="off"
            fullWidth
            className="input input-name"
          >
            Nombre
          </TextField>
          <TextField
            id="image"
            type="file"
            fullWidth
            variant="outlined"
            className="input input-image"
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
