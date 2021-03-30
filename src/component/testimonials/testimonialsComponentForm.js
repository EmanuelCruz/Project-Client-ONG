import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState, useEffect } from "react";
import { Button, TextField, MenuItem, Container } from "@material-ui/core/";
import {
  testimonialUpdate,
  testimonialCreate,
} from "../../services/querys/testimonialsServices";
import useStyles from "../../style/materialUiStyle";

function TestimonialComponent({ toModifyTestimonial }) {
  const classes = useStyles();
  const [testimonials, setTestimonials] = useState(toModifyTestimonial);
  const [img, setImg] = useState(toModifyTestimonial.image);
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);

  useEffect(() => {
    handleEmptyFields();
  }, [testimonials]);

  const changeHandler = (event) => {
    testimonials[event.target.id] = event.target.value;
    setTestimonials({ ...testimonials });
  };

  const handleImg = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    const image = event.target.files[0];
    formData.append("image", image);
    setFormData(formData);
  };

  const clearForm = () => {
    for (const property in testimonials) {
      testimonials[property] = "";
      setTestimonials({ ...testimonials });
    }
    setImg([]);
    setEmptyFields(true);
  };

  const handleSubmit = () => {
    if (!testimonials.id) {
      for (const property in testimonials) {
        formData.append(property, testimonials[property]);
      }
      setFormData(formData);
      if (testimonialCreate(formData)) {
        clearForm();
      }
    } else {
      for (const property in testimonials) {
        formData.append(property, testimonials[property]);
      }
      setFormData(formData);
      testimonialUpdate(formData, testimonials.id);
    }
  };

  const handleEmptyFields = () => {
    if (!testimonials.name || !testimonials.content || !testimonials.category) {
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
          label="Titulo"
          value={"" || testimonials.name}
          onChange={changeHandler}
        />
        <CKEditor
          editor={ClassicEditor}
          data={!testimonials.id ? "" : testimonials.content}
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
            testimonials["content"] = data;
            setTestimonials({ ...testimonials });
          }}
        />

        <img src={img} />
        <Button
          className={classes.button}
          variant="contained"
          component="label"
        >
          Agregar Imagen
          <input type="file" onChange={handleImg} id="image" hidden />
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          component="label"
          onClick={handleSubmit}
          disabled={emptyFields}
        >
          {!testimonials.id ? "Crear" : "Modificar"}
        </Button>
      </form>
    </Container>
  );
}

export default TestimonialComponent;
