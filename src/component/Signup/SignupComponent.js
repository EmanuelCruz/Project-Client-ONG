import React from "react";
import { useHistory } from "react-router-dom";
import "./SignupComponent.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  NOT_VALID_EMAIL,
  REQUIRED,
  PASSWORD_MIN_LENGHT_NUMBER,
  PASSWORD_MIN_LENGHT_WARNING,
  NAME_MIN_LENGTH_WARNING,
  NAME_MIN_LENGTH_NUMBER,
  LASTNAME_MIN_LENGTH_WARNING,
  LASTNAME_MIN_LENGTH_NUMBER,
} from "../../const/const";

import { ErrorAlertComponent } from '../Alert/AlertComponent';
import { register } from '../../services/querys/authService';

const schema = yup.object().shape({
  email: yup.string().email(NOT_VALID_EMAIL).required(REQUIRED),
  password: yup
    .string()
    .min(PASSWORD_MIN_LENGHT_NUMBER, PASSWORD_MIN_LENGHT_WARNING)
    .required(REQUIRED),
  firstName: yup
    .string()
    .min(NAME_MIN_LENGTH_NUMBER, NAME_MIN_LENGTH_WARNING)
    .required(REQUIRED),
  lastName: yup
    .string()
    .min(LASTNAME_MIN_LENGTH_NUMBER, LASTNAME_MIN_LENGTH_WARNING)
    .required(REQUIRED),
});

const SignupForm = () => {

  let history = useHistory();
  const onSignupSubmit = (values) => {
    register(values.firstName, values.lastName, values.email, values.password).then(res => {
      localStorage.setItem('token', res.data.token);
      history.push('/login');
    }).catch(err => ErrorAlertComponent());
  };

  return (
    <div className={"w-50 mx-auto"} style={{ marginTop: '20px' }}>
      {/*TODO: Responsive*/}
      <h2>Registrarse</h2>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          onSignupSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={"container"}>
            <div className={"form-group"}>
              <label htmlFor="firstName">
                Nombre{" "}
                {errors.firstName && touched.firstName ? (
                  <small>{errors.firstName}</small>
                ) : null}
              </label>
              <Field name="firstName" className={"form-control"} />
            </div>
            <div className={"form-group"}>
              <label htmlFor="lastName">
                Apellido{" "}
                {errors.lastName && touched.lastName ? (
                  <small>{errors.lastName}</small>
                ) : null}
              </label>
              <Field name="lastName" className={"form-control"} />
            </div>
            <div className={"form-group"}>
              <label htmlFor="email">
                E-mail{" "}
                {errors.email && touched.email ? (
                  <small>{errors.email}</small>
                ) : null}
              </label>
              <Field name="email" type="email" className={"form-control"} />
            </div>
            <div className={"form-group"}>
              <label htmlFor="password">
                Contraseña{" "}
                {errors.password && touched.password ? (
                  <small>{errors.password}</small>
                ) : null}
              </label>
              <Field name="password" type="password" className={"form-control"} />
            </div>
            <button type="submit" className={"d-block w-100 btn btn-delete"}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default SignupForm;
