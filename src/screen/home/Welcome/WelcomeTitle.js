import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '../HomeScreenStyles';


const WelcomeTitle = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.typography} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Zonas Grises
    </Typography>
  )
}

export default WelcomeTitle;