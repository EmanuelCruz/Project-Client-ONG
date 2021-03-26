import React from 'react';
import HeaderComponent from '../../component/header/HeaderComponent';
import useStyles from './HeaderScreenStyles'

const HeaderScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <HeaderComponent />
    </div>
  );
};

export default HeaderScreen;
