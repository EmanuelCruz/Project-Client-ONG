import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SERVER_URL } from "../../const/const";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  makeStyles,
  Button,
  TextField,
  MenuItem,
  Container,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  button: {
    display: "inline",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "block",
  },
}));

const categoriesMock = [
  { id: 1, category: "Policiales" },
  { id: 2, category: "Otros" },
  { id: 3, category: "Saraza" },
  { id: 4, category: "Categoria indefinida" },
];

function NewsComponent({ toModifyNews }) {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState(toModifyNews);
  const [img, setImg] = useState(toModifyNews.image);
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);

  useEffect(() => {
    handleEmptyFields();
    setCategories(categoriesMock);
  }, [news]);

  const handleCategory = (event) => {
    news[event.target.name] = event.target.value;
    setNews({ ...news });
  };

  const changeHandler = (event) => {
    news[event.target.id] = event.target.value;
    setNews({ ...news });
  };

  const handleImg = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    const image = event.target.files[0];
    formData.append("image", image);
    setFormData(formData);
  };

  const clearForm = () => {
    for (const property in news) {
      news[property] = "";
      setNews({ ...news });
    }
    setImg([]);
    setEmptyFields(true);
  };

  const handleSubmit = () => {
    //Post Condition
    if (!news.id) {
      for (const property in news) {
        formData.append(property, news[property]);
      }
      setFormData(formData);
      axios
        .post(SERVER_URL + "/news", formData)
        .then(function () {
          clearForm();
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      //Patch condition
      for (const property in news) {
        formData.append(property, news[property]);
      }
      setFormData(formData);
      axios
        .patch(SERVER_URL + "/news/" + news.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          clearForm();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  const handleEmptyFields = () => {
    if (!news.title || !news.content || !news.category) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <Container>
      <form className={classes.root}>
        <TextField
          id="title"
          label="Titulo"
          value={"" || news.title}
          onChange={changeHandler}
        />
        <CKEditor
          editor={ClassicEditor}
          data={!news.id ? "" : news.content}
          config={{
            removePlugins: [
              "ImageCaption",
              "ImageStyle",
              "ImageToolbar",
              "MediaEmbed",
            ],
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            news["content"] = data;
            setNews({ ...news });
          }}
        />

        <img src={img} />
        <Button
          className={classes.button}
          variant="contained"
          component="label"
        >
          Agregar Imagen
          <input type="file" onChange={handleImg} id="image" hidden />
        </Button>
        <TextField
          id="category"
          select
          label="Categoria"
          name="category"
          value={"" || news.category}
          onChange={handleCategory}
          helperText="Selecciona la categoria"
        >
          {categories.map((option) => (
            <MenuItem key={option.id} value={option.category}>
              {option.category}
            </MenuItem>
          ))}
        </TextField>
        <Button
          className={classes.button}
          variant="contained"
          component="label"
          onClick={handleSubmit}
          disabled={emptyFields}
        >
          {!news.id ? "Crear" : "Modificar"}
        </Button>
      </form>
    </Container>
  );
}

export default NewsComponent;
