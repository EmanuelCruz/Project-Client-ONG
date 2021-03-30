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
    const [modifiedName, setModifiedName] = useState(false)
    const [modifiedDescription, setModifiedDescription] = useState(false)
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
            createCategory(category)
            clearForm();
        } else {
            if (modifiedName && modifiedDescription) {
                updateCategory(category, category.id);
            } else {
                modifiedName && updateCategory(category.name, category.id);
                modifiedDescription && updateCategory(category.description, category.id);
            }
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
        event.target.id === "name" ? setModifiedName(true) : setModifiedDescription(true)
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
