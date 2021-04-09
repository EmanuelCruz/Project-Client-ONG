import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getNews } from "../../../services/querys/newsServices";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "whitesmoke",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  main: {
    backgroundColor: "whitesmoke",
  },
}));

const News = () => {
  const [novedades, setNovedades] = useState([]);
  const [lastNovedades, setLastNovedades] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getNews();
      setNovedades(data);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setLastNovedades(novedades?.reverse());
  }, [novedades]);

  const classes = useStyles();

  if (novedades?.length >= 1) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.main}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {lastNovedades.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title={card.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Box
                        component="div"
                        my={2}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        bgcolor="background.paper"
                      >
                        {card.content.replace(/(<([^>]+)>)/gi, "")}
                      </Box>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <a href={`/novedad/${card.id}`}>
                        <Button size="small" color="primary">
                          Ver
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  } else return null;
};

export default News;
