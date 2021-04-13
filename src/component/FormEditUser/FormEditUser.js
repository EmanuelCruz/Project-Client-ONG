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

import { connect } from 'react-redux';
import updateIsAuth from "../../store/isAuth/action";
import updateIsAdmin from "../../store/isAdmin/action";
import updateUser from '../../store/user/action';

import { useHistory } from 'react-router';

const myUser = {
    firstName: "firstName",
    lastName: "lastName",
    email: "mail@gmail.com",
};

const myRoleId = 1;

const schema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    email: Yup.string().email().required(REQUIRED),
    roleId: Yup.number().min(1).max(2),
});

export const FormEditUser = (props) => {
    const classes = useStyles();
    console.log(props)
    // const dataUser = props.user.user
    // const rol = dataUser.roleId
    const [user, setUser] = useState(myUser);
    const [roleId, setRoleId] = useState(myRoleId);

    function showInputForAdmin(props) {
    return (<div>
        <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Rol</InputLabel>
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
        {props.errors.roleId && <p id="feedback">{props.errors.roleId}</p>}
    </div>);
    }
    function showInputForUserStandard(props) {
        return(<div>
            <TextField
                label="Email"
                name="email"
                type="text"
                margin="normal"
                defaultValue={user.email}
                onChange={props.handleChange}
                fullWidth
            />
            {props.errors.email && <p id="feedback">{props.errors.email}</p>}
        </div>)
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
                                {roleId === 1
                                    ? showInputForAdmin(props)
                                    : showInputForUserStandard(props)}
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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{updateIsAdmin,updateIsAuth,updateUser})(FormEditUser);