import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
    InputLabel,
    Input,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Box,
} from "@material-ui/core";
import { REQUIRED } from "../../const/const";

const InputWelcomeText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const schema = Yup.object().shape({
        welcomeText: Yup.string().required(REQUIRED),
        slideImage1: Yup.mixed().required(REQUIRED),
        textoSlide1: Yup.string().required(REQUIRED),
        slideImage2: Yup.mixed().required(REQUIRED),
        textoSlide2: Yup.string().required(REQUIRED),
        slideImage3: Yup.mixed().required(REQUIRED),
        textoSlide3: Yup.string().required(REQUIRED),
    });
    return (
        <>
            <TextField
                label={label}
                className="textarea-input"
                multiline
                variant="outlined"
                fullWidth
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <p className="error">{meta.error}</p>
            ) : null}
        </>
    );
};
const InputSlideImage = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <InputLabel htmlFor={props.name}>
                <Input {...field} {...props} variant="outlined" fullWidth />
            </InputLabel>
            {meta.touched && meta.error ? (
                <p className="error">{meta.error}</p>
            ) : null}
        </>
    );
};
const InputSlideText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <InputLabel htmlFor={props.name}>
                <TextField
                    className=""
                    label={label}
                    fullWidth
                    {...field}
                    {...props}
                    variant="outlined"
                />
            </InputLabel>
            {meta.touched && meta.error ? (
                <p className="error">{meta.error}</p>
            ) : null}
        </>
    );
};

const FormEditHome = () => {
    return (
        <Box style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
            <Formik
                initialValues={{
                    welcomeText: "",
                    slideImage1: "",
                    textoSlide1: "",
                    slideImage2: "",
                    textoSlide2: "",
                    slideImage3: "",
                    textoSlide3: "",
                }}
                enableReinitialize={true}
                validationSchema={schema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2)); //Codigo para ver los campos que se envian
                }}
            >
                <Form>
                    <Paper style={{ padding: 16 }} elevation={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center">
                                        Formulario de Modificacion del Home
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <InputWelcomeText
                                    label="Texto de Bienvenida:"
                                    name="welcomeText"
                                    type="textarea"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">
                                        Slide 1
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideImage
                                    label="Slide 1:"
                                    name="slideImage1"
                                    type="file"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideText
                                    label="Texto Slide 1"
                                    name="textoSlide1"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">
                                    Slide 2
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideImage
                                    label="Slide 2:"
                                    name="slideImage2"
                                    type="file"
                                    xs={6}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideText
                                    label="Texto Slide 2"
                                    name="textoSlide2"
                                    type="text"
                                    xs={6}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">
                                    Slide 3
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideImage
                                    label="Slide 3:"
                                    name="slideImage3"
                                    type="file"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputSlideText
                                    label="Texto Slide 3"
                                    name="textoSlide3"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                                 
                    </Paper>
                </Form>
            </Formik>
        </Box>
    );
};

export default FormEditHome;
