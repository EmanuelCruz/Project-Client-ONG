import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from "sweetalert2";
import { Button, MenuItem, Container } from "@material-ui/core/";
import Box from '@material-ui/core/Box';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { UpgradeNews, CreateNews } from "../../services/querys/newsServices";
import { getDetalleNovedad } from "../../services/querys/detalleNovedadServices";
import { getCategories } from "../../services/querys/categoriesServices";
import { ErrorAlertComponent } from '../Alert/AlertComponent';
import { 
  PATH_BACKOFFICE_NEWS, REQUIRED,
  CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS, CONFIRM, } from "../../const/const";
import useStyles from "./styles/MaterialUiStyles";

function NewsComponent() {

    const { id } = useParams();
    const history = useHistory();
    const formikRef = useRef();

    const classes = useStyles();

    const isCreating = !id;

    const initialValues = {
        name: '',
        content: '',
        image: undefined,
        categoryId: 0
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string().required(REQUIRED),
      content: Yup.string().required(REQUIRED),
      categoryId: Yup.number().positive('Selecciona una categoria').required(REQUIRED)
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
      setStatus();
      for (const property in fields) {
        formData.append(property, fields[property]);
      }
      setFormData(formData);
      if (isCreating) {
        formCreateNews(formData, setSubmitting);
      } else {
        formEditNews(id, formData, setSubmitting);
      }
    }

    function formCreateNews(formData, setSubmitting) {
      CreateNews(formData).then(res => {
        Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS).then(() => {
          history.push(PATH_BACKOFFICE_NEWS);
        });
      }).catch(err => {
        setSubmitting(false);
        ErrorAlertComponent();
      });
    }

    function formEditNews(id, formData, setSubmitting) {
      UpgradeNews(formData, id).then(res => {
        Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS).then(() => {
          history.push(PATH_BACKOFFICE_NEWS);
        });
      }).catch(err => {
        setSubmitting(false);
        ErrorAlertComponent();
      });
    }

    const handleImg = (event) => {
      setImg(URL.createObjectURL(event.target.files[0]));
      const image = event.target.files[0];
      formikRef.current.setFieldValue("image", image);
    };

    const [img, setImg] = useState();
    const [newsContent, setNewsContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState(new FormData());

    useEffect(() => {
      getCategories().then(res => {
        setCategories(res.data);
        if (!isCreating) {
          getDetalleNovedad(id).then(data => {
            for (let key in data) {
              formikRef.current.setFieldValue(key, data[key]);
            }
            setImg(data.image);
            setNewsContent(data.content);
          });
        }
      });
    }, []);

    return (
      <Container>
        <Formik initialValues={initialValues} validationSchema={validationSchema}
          onSubmit={onSubmit} innerRef={formikRef}>
          {({submitForm, isSubmitting, touched, errors}) => (
            <Form className="form-container">
              <Box margin={2}>
                <Field
                  component={TextField}
                  style ={{width: '100%'}}
                  name="name"
                  label="Titulo"
                  helperText={touched.name && errors.name} />
              </Box>
              <Box margin={2}>
                {errors.content &&
                <div className={classes.error}>La Novedad requiere Contenido.</div>}
                <CKEditor
                  id="content"
                  name="content"
                  editor={ClassicEditor}
                  data={newsContent}
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
                    formikRef.current.setFieldValue("content", data);
                  }}
                />
              </Box>
              <Box margin={1}>
                <img src={img} className={classes.image} />
              </Box>
              <Box margin={1}>
                <Button
                  className={classes.button}
                  variant="contained"
                  component="label"
                >
                  Agregar Imagen
                  <input type="file" onChange={handleImg} id="image" hidden />
                </Button>
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  style ={{width: '50%'}}
                  type="text"
                  name="categoryId"
                  label="Categoria"
                  select
                  variant="standard"
                  helperText="Selecciona la categoria"
                  error={touched.categoryId && errors.categoryId}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box margin={1}>
              <Button
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                {!id ? "Crear" : "Modificar"}
              </Button>
            </Box>
            </Form>
          )}
        </Formik>
      </Container>
    )
}

export default NewsComponent;