import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router";
import { SuccessAlertComponent } from "../Alert/AlertComponent";
import { editUser } from "../../services/querys/userServices";
import { useHistory } from 'react-router';

const schema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    email: Yup.string().email().required(REQUIRED),
    roleId: Yup.number().min(1).max(2),
});

const FormEditUser = () => {
    let history = useHistory();
    const classes = useStyles();
    const location = useLocation();
    const dataUser = location.state
    const role = dataUser.roleId
    const [user, setUser] = useState(dataUser);
    const [roleId, setRoleId] = useState(role);
    const onSubmit = (values) => {
        SuccessAlertComponent().then(async (result) => {
            const firstName = values.firstName;
            const lastName = values.lastName;
            const email = values.email;
            const roleId = values.roleId;
            const newUser = { ...user, firstName, lastName, email, roleId };
            const resp = await editUser(newUser, newUser.id);
            history.push("/backoffice/users")
        });
    }

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
                            email: user.email,
                            roleId: roleId,
                        }}
                        enableReinitialize={true}
                        validationSchema={schema}
                        onSubmit={onSubmit}
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
                                {props.errors.firstName && (
                                    <p id="feedback">
                                        {props.errors.firstName}
                                    </p>
                                )}
                                <TextField
                                    label="Apellido"
                                    name="lastName"
                                    type="text"
                                    margin="normal"
                                    defaultValue={user.lastName}
                                    onChange={props.handleChange}
                                    fullWidth
                                />
                                {props.errors.lastName && (
                                    <p id="feedback">{props.errors.lastName}</p>
                                )}
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="text"
                                    margin="normal"
                                    defaultValue={user.email}
                                    onChange={props.handleChange}
                                    fullWidth
                                />
                                {props.errors.email && (
                                    <p id="feedback">{props.errors.email}</p>
                                )}
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="select-label">
                                        Rol
                                    </InputLabel>
                                    <Select
                                        name="roleId"
                                        labelId="select-label"
                                        id="select"
                                        defaultValue={roleId}
                                        onChange={props.handleChange}
                                        align="left"
                                    >
                                        <MenuItem value={1}>Admin</MenuItem>
                                        <MenuItem value={2}>Standard</MenuItem>
                                    </Select>
                                </FormControl>
                                {props.errors.roleId && (
                                    <p id="feedback">{props.errors.roleId}</p>
                                )}
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
};;

export default FormEditUser;