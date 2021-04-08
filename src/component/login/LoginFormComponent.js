import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  NOT_VALID_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGHT_NUMBER,
  PASSWORD_MIN_LENGHT_WARNING,
} from "../../const/const";
import { connect } from 'react-redux';
import updateIsAuth from "../../store/isAuth/action";

import { ErrorAlertComponent } from '../Alert/AlertComponent';
import { login } from '../../services/querys/authService';
import NotRegisteredUser from "./NotRegisteredUser";

const schema = Yup.object().shape({
  email: Yup.string().email(NOT_VALID_EMAIL).required(EMAIL_REQUIRED),
  password: Yup.string()
    .min(PASSWORD_MIN_LENGHT_NUMBER, PASSWORD_MIN_LENGHT_WARNING)
    .required(PASSWORD_REQUIRED),
});

const LoginFormComponent = (props) => {

  let history = useHistory();
  const onLoginSubmit = (values) => {
    login(values.email, values.password).then(res => {
      history.push("/");
      props.updateIsAuth(true)

    }).catch(err => ErrorAlertComponent());
  };

  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="login-wrapper">
          <h2>Iniciar Sesión</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
              onLoginSubmit(values);
            }}
          >
            {({ touched, errors }) => (
              <Form className="form-container">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className={"form-control"}
                    placeholder="Email"
                  />
                  {touched.email && errors.email && (
                    <span className="help-block text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <Field
                    type="password"
                    name="password"
                    className={"form-control"}
                    placeholder="Contraseña"
                  />
                  {touched.password && errors.password && (
                    <span className="help-block text-danger">
                      {errors.password}
                    </span>
                  )}
                </div>
                <NotRegisteredUser />
                <button type="submit" className="btn btn-delete">
                  Ingresar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(null, { updateIsAuth })(LoginFormComponent);
