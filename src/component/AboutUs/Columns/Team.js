import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { getMembersList } from "../../../services/querys/membersServices";
import useStyles from "../styled/ColumnsStyles";

const Team = () => {

  let [members, setMembers] = useState();
  const classes = useStyles();
  useEffect(() => {
    async function fetchMembers() {
      const response = await getMembersList();
      setMembers(response.data);
    }
    fetchMembers();
  }, []);

  if (members?.length >= 1) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.main}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {members?.map((card) => (
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
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    )
  } else return null
}

export default Team