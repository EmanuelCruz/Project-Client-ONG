import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CategoriesCardComponent({category}) {
    return (
        <Card className="mt-2 mb-2">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {category.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoriesCardComponent;