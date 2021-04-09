import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, TextField, Container } from "@material-ui/core/";
import {
  updateActivities,
  createActivities,
} from "../../services/querys/activitiesServices";
import useStyles from "./ActivitiesMaterialStyles";
import { CreateActivitiesSuccess } from "../Alert/AlertComponent";
import { useHistory } from "react-router";

const ActivitiesComponent = ({ toModifyActivities }) => {
  const classes = useStyles();
  const [activities, setActivities] = useState(toModifyActivities);
  const [img, setImg] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);
  let history = useHistory();

  useEffect(() => {
    handleEmptyFields();
  }, [activities]);

  const changeHandler = (event) => {
    activities[event.target.id] = event.target.value;
    setActivities({ ...activities });
  };

  const handleImg = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    const image = event.target.files[0];
    formData.append("image", image);
    setFormData(formData);
  };

  const clearForm = () => {
    for (const property in activities) {
      activities[property] = "";
      setActivities({ ...activities });
    }
    setFormData(new FormData());
    setImg([]);
    setEmptyFields(true);
  };

  const handleSubmit = () => {
    if (!activities.id) {
      for (const property in activities) {
        formData.append(property, activities[property]);
      }
      setFormData(formData);
      if (createActivities(formData)) {
        clearForm();
        CreateActivitiesSuccess();
        setTimeout(function () {
          history.push("/backoffice/activities");
        }, 3000);
      }
    } else {
      for (const property in activities) {
        formData.append(property, activities[property]);
      }
      setFormData(formData);
      updateActivities(formData, activities.id);
    }
  };

  const handleEmptyFields = () => {
    if (!activities.name || !activities.content) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <Container>
      <h1>Crear Actividad</h1>
      <form className={classes.root}>
        <TextField
          id="name"
          label="Name"
          value={"" || activities.name}
          onChange={changeHandler}
        />
        <CKEditor
          editor={ClassicEditor}
          data={!activities.id ? "" : activities.content}
          config={{
            removePlugins: [
              "ImageCaption",
              "ImageStyle",
              "ImageToolbar",
              "MediaEmbed",
            ],
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            activities["content"] = data;
            setActivities({ ...activities });
          }}
        />
        <img src={img} />
        <div>
          <Button
            className={classes.button}
            variant="contained"
            component="label"
          >
            Agregar Imagen
            <input type="file" onChange={handleImg} id="image" hidden />
          </Button>
        </div>
        <Button
          className={classes.button}
          variant="contained"
          component="label"
          onClick={handleSubmit}
          disabled={emptyFields}
        >
          {!activities.id ? "Crear" : "Modificar"}
        </Button>
      </form>
    </Container>
  );
};

export default ActivitiesComponent;
