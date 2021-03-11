import React from "react";

const FormEditHome = () => {
    return (
        <Formik
            initialValues={{
                welcomeText: "",
                slideImage1: "",
                textoSlide1: "",
                slideImage2: "",
                textoSlide2: "",
                slideImage3: "",
                textoSlide3: "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2)); //Codigo para ver los campos que se envian
            }}
        >
            <Form></Form>
        </Formik>
    );
};

export default FormEditHome;
