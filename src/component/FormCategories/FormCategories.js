import React, { useEffect, useState } from "react";
import {
  createCategory,
  updateCategory,
<<<<<<< HEAD
  getACategory,
} from "../../services/querys/categoriesServices";
import { Button, TextField, Container } from "@material-ui/core/";
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

=======
} from "../../services/querys/categoriesServices";
import { Button, TextField, Container } from "@material-ui/core/";
import useStyles from "./FormCategoriesStyles";
import { SuccessAlertComponent } from '../Alert/AlertComponent';

export default function FormCategories({ dataCategory }) {
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
      SuccessAlertComponent();
    } else {
      if (modifiedName && modifiedDescription) {
        updateCategory(category, category.id);
      } else {
        modifiedName && updateCategory(category.name, category.id);
        modifiedDescription && updateCategory(category.description, category.id);
      }
      alert("Se actualizo la categoría");
    }
  }

>>>>>>> a7fdbde9e8a3967eadda1cd8a9faf5268aa450e2
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
<<<<<<< HEAD
    console.log(category);
  };

  return (
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
  );
}
=======
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
>>>>>>> a7fdbde9e8a3967eadda1cd8a9faf5268aa450e2
