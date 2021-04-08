import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  Typography,
  Container,
  CardActions,
} from "@material-ui/core";
import ButtonDeleteCategoryComponent from "../ButtonsCategory/ButtonDeleteCategoryComponent";
import ButtonEditCategoryComponent from "../ButtonsCategory/ButtonEditCategoryComponent";
import useStyles from "../../style/materialUiStyle";

function CategoriesCardComponent({ category, setIsDeleted }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <CardContent className={classes.root}>
          <Typography
            className={classes.nameCategory}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {category.name}
          </Typography>
          <Typography
            className={classes.nameCategory}
            color="textSecondary"
            gutterBottom
            variant="h6"
            component="p"
          >
            {category.description}
          </Typography>
          <CardActions className={classes.cardCenterStyle}>
            <ButtonEditCategoryComponent category={category} />
            <ButtonDeleteCategoryComponent
              category={category}
              setIsDeleted={setIsDeleted}
            />
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CategoriesCardComponent;
