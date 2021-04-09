import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function NewsCardComponent({ news }) {
  const useStyles = makeStyles({
    card: { maxWidth: 345, height: 245 },
    media: { height: 140 },
  });
  const classes = useStyles();

  const history = useHistory();

  const onClickCard = () => {
    history.push(`/novedad/${news.id}`);
  };

  const content_clean = news.content.replace(/(<([^>]+)>)/gi, "");

  return (
    <Card className={classes.card + "mt-2 mb-2"}>
      <CardActionArea onClick={onClickCard}>
        <CardMedia
          className={classes.media}
          component="img"
          image={news.image}
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="h2">
            {news.name}
          </Typography>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {content_clean}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCardComponent;
