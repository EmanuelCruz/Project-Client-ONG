import React, { useState } from "react";
import { Formik, Form } from "formik";
import {
    Container,
    FormControl,
    InputLabel,
    Button,
    TextField,
    Typography,
    Paper,
    Select,
    MenuItem,
} from "@material-ui/core";
import * as Yup from "yup";
import useStyles from "./FormEditUserStyles";
import { REQUIRED } from "../../const/const";

const myUser = {
    firstName: "Emanuel",
    lastName: "Cruz",
    roleId: 1,
};

const schema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    roleId: Yup.number().min(1).max(2)
});

const FormEditUser = () => {
    const classes = useStyles();
    const [user, setUser] = useState(myUser);
    return (
        <div>
            <Container maxWidth="sm">
                <Paper style={{ padding: 16 }} elevation={3}>
                    <Typography variant="h6" align="center">
                            Formulario de Edición de Usuario
                    </Typography>
                    <Formik
                        initialValues={{
                            firstName: user.firstName,
                            lastName: user.lastName,
                            roleId: user.roleId,
                        }}
                        enableReinitialize={true}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2)); //Codigo para ver los campos que se envian
                        }}
                    >
                        {(props) => (
                            <Form className={classes.form}>
                                <TextField
                                    label="Nombre"
                                    name="firstName"
                                    type="text"
                                    margin="normal"
                                    defaultValue={user.firstName}
                                    onChange={props.handleChange}
                                    fullWidth
                                />
                                <TextField
                                    label="Apellido"
                                    name="lastName"
                                    type="text"
                                    margin="normal"
                                    defaultValue={user.lastName}
                                    onChange={props.handleChange}
                                    fullWidth
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="select-label">
                                        Rol
                                    </InputLabel>
                                    <Select
                                        name="roleId"
                                        labelId="select-label"
                                        id="select"
                                        defaultValue={user.roleId}
                                        onChange={props.handleChange}
                                        align="left"
                                    >
                                        <MenuItem value={1}>Admin</MenuItem>
                                        <MenuItem value={2}>Standard</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button
                                    className={classes.button}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Container>
        </div>
    );
};

export default FormEditUser;
