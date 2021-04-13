import React, { useEffect, useState } from "react";
import CategoriesCardComponent from "../../component/Categories/CategoriesCardComponent";
import { getCategories } from "../../services/querys/categoriesServices";
import useStyles from "../../style/materialUiStyle";
import { Box, Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Pagination from "@material-ui/lab/Pagination";
import NoItemsComponent from "../../component/NoItems/NoItemsComponent";

function BackOfficeCategoriesScreen() {
  const [categories, setCategories] = useState([]);
  const itemsPerPage = 4;
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


  if (categories?.length >= 1) {
    return (
      <Box m={2} p={2}>
        <Container>
          <Container>
            <h3>Categorias</h3>
            <Grid container spacing={10} direction="row" justify="center">
              {categories.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((category) => (
                <Grid key={category.id} item zeroMinWidth>
                  <CategoriesCardComponent
                    key={category.id}
                    category={category}
                    setIsDeleted={setIsDeleted}
                  />
                </Grid>
              ))}
            </Grid>
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
      </Box>
    )
  } else return (
    <NoItemsComponent item="categorías" />
  )
}

export default BackOfficeCategoriesScreen;
