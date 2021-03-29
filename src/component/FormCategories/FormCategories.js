import React, { useEffect, useState } from 'react'
import {
    createCategory,
    updateCategory,
} from "../../services/querys/categoriesServices";
import { Button, TextField, Container } from "@material-ui/core/";
import useStyles from "./FormCategoriesStyles";

export default function FormCategories({dataCategory}) {
    const classes = useStyles();
    const [category, setCategory] = useState(dataCategory)
    const [formData, setFormData] = useState(new FormData())
    const [emptyFields, setEmptyFields] = useState(true);

    useEffect(() => {
        handleEmptyFields();
    }, [category])

    const handleEmptyFields = () => {
        if (!category.name || !category.description) {
            setEmptyFields(true);
        } else {
            setEmptyFields(false);
        }
    };

    const handleSubmit = () => {
        if (!category.id) {
            for (const property in category) {
                formData.append(property, category[property]);
            }
            setFormData(formData);
            if (createCategory(formData)) {
                clearForm();
            }
        } else {
            for (const property in category) {
                formData.append(property, category[property]);
            }
            setFormData(formData);
            updateCategory(formData, category.id);
        }
    }

    const clearForm = () => {
        for (const property in category) {
            category[property] = "";
            setCategory({ ...category });
        }
        setEmptyFields(true);
    };

    const changeHandler = (event) => {
        category[event.target.id] = event.target.value;
        setCategory({ ...category });
    };

    return (
        <div>
            <Container>
                <form className={classes.root}>
                    <TextField
                        id="name"
                        label="Nombre"
                        value={"" || category.name}
                        onChange={changeHandler}
                    />
                    <TextField
                        id="description"
                        label="Descripción"
                        value={"" || category.description}
                        onChange={changeHandler}
                    />
                    <Button
                        className={classes.button}
                        variant="contained"
                        component="label"
                        onClick={handleSubmit}
                        disabled={emptyFields}
                    >
                        {!category.id ? "Crear" : "Modificar"}
                    </Button>
                </form>
            </Container>
        </div>
    );
};
