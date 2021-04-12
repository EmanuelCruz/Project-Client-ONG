import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState, useEffect } from "react";
import { Button, TextField, Container } from "@material-ui/core/";
import Box from '@material-ui/core/Box';
import {
  testimonialUpdate,
  testimonialCreate,
  getATestimonial,
} from "../../services/querys/testimonialsServices";
import useStyles from "../../style/materialUiStyle";
import { useHistory, useParams } from "react-router-dom";
import {
  CreateTestimonialSuccess,
  UpdateTestimonialSuccess,
} from "../Alert/AlertComponent";

function TestimonialComponentForm() {
  const classes = useStyles();
  const [testimonials, setTestimonials] = useState([]);
  const [img, setImg] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    handleEmptyFields();
  }, [testimonials]);

  useEffect(() => {
    if (id) {
      const fetchTestimonial = async (id) => {
        const testimonial = await getATestimonial(id);
        setTestimonials(testimonial.data[0]);
        setImg(testimonial.data[0].image);
      };
      fetchTestimonial(id);
      if (!testimonials.content) {
        fetchTestimonial(id);
      }
    }
  }, []);

  const titleHandler = (event) => {
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
        CreateTestimonialSuccess();
        setTimeout(function () {
          history.push("/backoffice/testimonios");
        }, 3000);
      }
    } else {
      for (const property in testimonials) {
        formData.append(property, testimonials[property]);
      }
      setFormData(formData);
      testimonialUpdate(formData, testimonials.id);
      UpdateTestimonialSuccess();
      history.push("/backoffice/testimonios");
    }
  };

  const handleEmptyFields = () => {
    if (!testimonials.name || !testimonials.content) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <Container>
      <div>
        <Box m={2} p={2}>
          <h1>{!id ? "Crear" : "Modificar"} Testimonio</h1>
        </Box>
      </div>
      <form className={classes.root}>
        <TextField
          id="name"
          label="Titulo"
          value={"" || testimonials.name}
          onChange={titleHandler}
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

        <div>
          <Box m={2} p={2}>
            <Button
              className={classes.button}
              variant="contained"
              component="label"
              onClick={handleSubmit}
              disabled={emptyFields}
            >
              {!id ? "Crear" : "Modificar"}
            </Button>
          </Box>
        </div>
      </form>
    </Container>
  );
}

export default TestimonialComponentForm;
