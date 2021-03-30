import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonDeleteCategoryComponent from '../ButtonDeleteCategory/ButtonDeleteCategoryComponent';
import useStyles from './CategoriesCardComponentStyles'

function CategoriesCardComponent({category}) {
    const classes = useStyles();
    return (
        <Card className="mt-2 mb-2">
            <CardContent className={classes.cardContent}>
                <Typography
                    className={classes.nameCategory}
                    gutterBottom
                    variant="h6"
                    component="h2"
                >
                    {category.name}
                </Typography>
                <ButtonDeleteCategoryComponent category={category} />
            </CardContent>
        </Card>
    );
}

export default CategoriesCardComponent;