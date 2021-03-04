import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("Requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  firstName: yup
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .required("Requerido"),
  lastName: yup
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .required("Requerido"),
});

const SignupForm = () => (
  <>
    <h2>SingUp</h2>
    <Formik
      initialValues={{ email: "", firstName: "", lastName: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={"container"}>
          <div className={"form-group"}>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" className={"form-control"} />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>
          <div className={"form-group"}>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" className={"form-control"} />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
          <div className={"form-group"}>
            <label htmlFor="email">E-mail</label>
            <Field name="email" type="email" className={"form-control"} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <div className={"form-group"}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={"form-control"} />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </>
);

export default SignupForm;
