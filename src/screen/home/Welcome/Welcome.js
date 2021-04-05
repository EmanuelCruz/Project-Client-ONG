import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WelcomeMessage from './WelcomeMessage'
import WelcomeTitle from './WelcomeTitle'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: 'whitesmoke',
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <WelcomeTitle />
        <WelcomeMessage />
      </Container>
    </div>
  )
}

export default Welcome