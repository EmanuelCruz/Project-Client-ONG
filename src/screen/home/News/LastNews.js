import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '../HomeScreenStyles';

const LastNews = () => {
  const classes = useStyles()

  return (
    <Typography className={classes.typography} style={{ backgroundColor: 'whitesmoke' }}
      component="h3" variant="h4" align="center" color="textPrimary">
      Últimas novedades:
    </Typography>
  )
}

export default LastNews;