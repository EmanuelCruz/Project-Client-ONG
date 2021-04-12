import React, { useState, useEffect } from "react";
import { Button, TextField, Container } from "@material-ui/core/";
import { createMembers } from "../../../services/querys/membersServices";
import useStyles from "../../../style/materialUiStyle";
import { useHistory } from "react-router-dom";
import { CreateTestimonialSuccess } from "../../Alert/AlertComponent";
import { handleImg, titleHandler } from "../helpers/members";

function CreateMemberComponent() {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const [img, setImg] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);
  let history = useHistory();

  useEffect(() => {
    handleEmptyFields();
  }, [members]);

  const clearForm = () => {
    for (const property in members) {
      members[property] = "";
      setMembers({ ...members });
    }
    setImg([]);
    setEmptyFields(true);
  };

  const handleSubmit = () => {
    if (!members.id) {
      for (const property in members) {
        formData.append(property, members[property]);
      }
      setFormData(formData);
      if (createMembers(formData)) {
        clearForm();
        CreateTestimonialSuccess();
        setTimeout(function () {
          history.push("/backoffice/members");
        }, 3000);
      }
    } else {
      for (const property in members) {
        formData.append(property, members[property]);
      }
      setFormData(formData);
    }
  };

  const handleEmptyFields = () => {
    if (!members.name) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <Container className={classes.containerMembers}>
      <h1>Crear Miembro</h1>
      <form className={classes.root}>
        <TextField
          id="name"
          label="Nombre"
          value={"" || members.name}
          onChange={(e) => titleHandler(e, members, setMembers)}
          variant="filled"
        />
        <img src={img} alt="Agregar una imagen" />
        <div>
          <Button
            className={`${classes.button} btn btn-primary`}
            variant="contained"
            component="label"
          >
            Agregar Imagen
            <input
              type="file"
              onChange={(e) => handleImg(e, setImg, formData, setFormData)}
              id="image"
              hidden
            />
          </Button>
        </div>

        <div>
          <Button
            className={classes.button}
            variant="contained"
            component="label"
            onClick={handleSubmit}
            disabled={emptyFields}
          >
            {!members.id ? "Crear" : "Modificar"}
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default CreateMemberComponent;
