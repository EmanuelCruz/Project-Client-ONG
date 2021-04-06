import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, TextField, MenuItem, Container } from "@material-ui/core/";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UpgradeNews, CreateNews } from "../../services/querys/newsServices";
import { getDetalleNovedad } from "../../services/querys/detalleNovedadServices";
import { getCategories } from "../../services/querys/categoriesServices";
import useStyles from "./styles/MaterialUiStyles";
import { PATH_BACKOFFICE_NEWS } from "../../const/const";

function NewsComponent() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState({});
  const [img, setImg] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [emptyFields, setEmptyFields] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    handleEmptyFields();
  }, [news]);

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res.data);
      if (id) {
        getDetalleNovedad(id).then(data => {
          setNews(data);
          setImg(data.image);
        });
      }
    });
  }, []);

  //TODO: Fix handle category
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
    if (!id) {
      for (const property in news) {
        formData.append(property, news[property]);
      }
      setFormData(formData);
      const res = CreateNews(formData);
      console.log(res);
      if (res) {
        clearForm();
        history.push(PATH_BACKOFFICE_NEWS);
      }
    } else {
      for (const property in news) {
        formData.append(property, news[property]);
      }
      setFormData(formData);
      UpgradeNews(formData, news.id);
    }
  };

  const handleEmptyFields = () => {
    if (!news.name || !news.content || !news.categoryId) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <Container>
      <form className={classes.root}>
        <TextField
          id="name"
          label="Titulo"
          value={"" || news.name}
          onChange={changeHandler}
        />
        <CKEditor
          editor={ClassicEditor}
          data={"" || news.content}
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
          id="categoryId"
          select
          label="Categoria"
          name="categoryId"
          value={0 || news.categoryId}
          onChange={handleCategory}
          helperText="Selecciona la categoria"
        >
          {categories.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
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
          {!id ? "Crear" : "Modificar"}
        </Button>
      </form>
    </Container>
  );
}

export default NewsComponent;
