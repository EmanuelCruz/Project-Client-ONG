import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginFormBody(props) {
  const { touched, errors } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper">
          <h2>Iniciar Sesion</h2>
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
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

const LoginFormComponent = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },
  handleSubmit: (values) => {
    const USER_LOGIN = values;
    //TODO:Conection to Backend (POST)
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("El email no es valido")
      .required("Se requiere email"),
    password: Yup.string()
      .min(6, "La longitud minima es de 6 caracteres")
      .required("Se requiere contraseña"),
  }),
})(LoginFormBody);

export default LoginFormComponent;
