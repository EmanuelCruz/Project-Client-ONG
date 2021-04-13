import React from "react";
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
import { editUser } from "../../services/querys/userServices";
import { connect } from 'react-redux';
import updateIsAuth from "../../store/isAuth/action";
import updateIsAdmin from "../../store/isAdmin/action";
import updateUser from '../../store/user/action';
import { SuccessAlertComponent } from "../Alert/AlertComponent";

const schema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    email: Yup.string().email().required(REQUIRED),
    roleId: Yup.number().min(1).max(2),
});

const FormEditUser = (props) => {
    const classes = useStyles();
    const user = props.user.user
    const roleId = user.roleId

    const onSubmit = async (values) => {
        SuccessAlertComponent().then(async (result) => {
            if (result.isConfirmed) {
                if (user.roleId === 1) {
                    const firstName = values.firstName;
                    const lastName = values.lastName;
                    const roleId = values.roleId;
                    const userUpdate = { ...user, firstName, lastName, roleId };
                    const resp = await editUser(userUpdate, userUpdate.id);
                    if (resp) {
                        props.updateUser(userUpdate);
                        props.updateUser(userUpdate);
                        if (userUpdate.roleId === 1) {
                            props.updateIsAdmin(true);
                            props.updateIsAuth(true);
                        } else {
                            props.updateIsAdmin(false);
                        }
                    }
                } else {
                    const firstName = values.firstName;
                    const lastName = values.lastName;
                    const roleId = values.roleId;
                    const email = values.email;
                    const userUpdate = {
                        ...user,
                        firstName,
                        lastName,
                        roleId,
                        email,
                    };
                    const resp = await editUser(userUpdate, userUpdate.id);
                    if (resp) {
                        props.updateUser(userUpdate);
                        props.updateUser(userUpdate);
                        if (userUpdate.roleId === 1) {
                            props.updateIsAdmin(true);
                            props.updateIsAuth(true);
                        } else {
                            props.updateIsAdmin(false);
                        }
                    }
                }
            }
        });
    };


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