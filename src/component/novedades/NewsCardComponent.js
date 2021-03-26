import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function NewsCardComponent({news}) {

    const history = useHistory();

    const onClickCard = () => {
        history.push(`/novedad/${news.id}`);
    };

    return(
        <Card className="mt-2 mb-2">
            <CardActionArea onClick={onClickCard}>
                <CardMedia component="img" image={news.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {news.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default NewsCardComponent;