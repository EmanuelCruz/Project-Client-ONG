import React, { useEffect, useState } from "react";
import CategoriesCardComponent from "../../component/Categories/CategoriesCardComponent";
import { getCategories } from "../../services/querys/categoriesServices";
import useStyles from "../../style/materialUiStyle";
import { Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

function BackOfficeCategoriesScreen() {
  const [categories, setCategories] = useState([]);
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const classes = useStyles();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
        setNoOfPages(Math.ceil(res.data.length / itemsPerPage));
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
        setNoOfPages(Math.ceil(res.data.length / itemsPerPage));
        setIsDeleted(false);
      })
      .catch((err) => console.log(err.message));
  }, [isDeleted]);

  return (
    <Container>
      <Container>
        <h1>Categorias</h1>
        {categories.map((category) => (
          <CategoriesCardComponent
            key={category.id}
            category={category}
            setIsDeleted={setIsDeleted}
          />
        ))}
      </Container>
      <Container className={classes.cardCenterStyle}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handlePagination}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Container>
    </Container>
  );
}

export default BackOfficeCategoriesScreen;
