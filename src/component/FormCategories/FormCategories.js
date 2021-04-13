import React, { useEffect, useState } from "react";
import {
  createCategory,
  updateCategory,
  getACategory,
} from "../../services/querys/categoriesServices";
import { Button, TextField, Container } from "@material-ui/core/";
import Box from '@material-ui/core/Box';
import useStyles from "./FormCategoriesStyles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  CreateCategorieSuccess,
  UpdateCategorieSuccess,
} from "../Alert/AlertComponent";

export default function FormCategories() {
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const [emptyFields, setEmptyFields] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (id) {
      const fetchCategories = async (id) => {
        const categorie = await getACategory(id);
        setCategory(categorie.data);
      };
      fetchCategories(id);
    }
  }, []);

  useEffect(() => {
    handleEmptyFields();
  }, [category]);

  const handleEmptyFields = () => {
    if (!category.name || !category.description) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  const handleSubmit = () => {
    if (!category.id) {
      createCategory(category);
      clearForm();
      setTimeout(function () {
        history.push("/backoffice/categories");
      }, 3000);
      CreateCategorieSuccess();
    } else {
      updateCategory(category, category.id);
      setTimeout(function () {
        history.push("/backoffice/categories");
      }, 3000);
      UpdateCategorieSuccess();
    }
  };

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
    <Container>
      <Box m={2} p={2}>
          <h3>{!id ? "Crear" : "Modificar"} Categoria</h3>
        </Box>
      <form className={classes.root}>
        <TextField
          id="name"
          label="Nombre"
          value={category.name || ""}
          onChange={changeHandler}
          inputProps={{ maxLength: 15 }}
        />
        <TextField
          id="description"
          label="Descripción"
          value={category.description || ""}
          onChange={changeHandler}
          inputProps={{ maxLength: 15 }}
        />
        <Box m={2} p={2}>
          <Button
            className={classes.button}
            variant="contained"
            component="label"
            onClick={handleSubmit}
            disabled={emptyFields}
          >
            {!category.id ? "Crear" : "Modificar"}
          </Button>
        </Box>
      </form>
    </Container>
  );
}
