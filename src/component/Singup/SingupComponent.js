import React from "react";
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
