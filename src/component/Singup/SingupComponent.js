import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: { email: "", name: '', lastname: '', password: '' },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <label htmlFor="name">First Name</label>
            <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                id="lastname"
                name="lastname"
                type="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
            />
            <button type="submit">Singup</button>
        </form>
    );
};

export default SignupForm;
