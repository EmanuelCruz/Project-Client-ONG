import React from 'react'
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from "../styled/ColumnsStyles";

const articles = [
  {
    id: 1, title: 'La organización tiene diversas lineas de acción:', content: [
      'Inserción laboral', 'TSICG - Teach me something I can’t Google', 'Facilitación de clases online',
      'Talleres', 'Desarrollo de habilidades socioemocionales',]
  },
  {
    id: 2, title: 'Las campañas de recolección que suelen llevar a cabo son:', content: [
      'Cuarentena Solidaria', 'Día del Niño', 'Vuelta a Clases', 'Navidad',
    ]
  }
]


const Mision = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {articles?.map((article) => (
              <Grid item key={article.id} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    title={article.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {article.title}
                    </Typography>
                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                      <ul>
                        {article.content.map((content) => (
                          <li>{content}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

export default Mision
