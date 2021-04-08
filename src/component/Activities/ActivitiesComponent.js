import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, TextField, Container } from "@material-ui/core/";
import {
  updateActivities,
  createActivities,
} from "../../services/querys/activitiesServices";
import useStyles from "./ActivitiesMaterialStyles";

const ActivitiesComponent = ({ toModifyActivities }) => {
  const classes = useStyles();
  const [activities, setActivities] = useState(toModifyActivities);
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);

  useEffect(() => {
    handleEmptyFields();
  }, [activities]);

  const changeHandler = (event) => {
    activities[event.target.id] = event.target.value;
    setActivities({ ...activities });
  };

  const clearForm = () => {
    for (const property in activities) {
      activities[property] = "";
      setActivities({ ...activities });
    }
    setFormData(new FormData())
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
        alert("Se creo la actividad");
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
        <Button
          className={classes.button}
          variant="contained"
          component="label"
          onClick={handleSubmit}
          disabled={emptyFields}>
          {!activities.id ? "Crear" : "Modificar"}
        </Button>
      </form>
    </Container>
  );
};

export default ActivitiesComponent;
