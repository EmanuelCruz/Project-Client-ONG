import React from 'react'
import { NavLink } from "react-router-dom";
import DropDawnActivitiesComponente from './DropDawnActivities/DropDawnActivitiesComponent'
import { connect } from 'react-redux'


const UsersItems = ({ drawerOpen, classes, isAuth }) => {
  return (
    isAuth.isAuth === true ? (
      <NavLink
        activeClassName={classes.menuButtonActive}
        className={classes.menuButton}
        exact
        key={"logout"}
        to={"/logout"}
      >
        {"Logout"}
      </NavLink>
    ) : (
      <NavLink
        activeClassName={classes.menuButtonActive}
        className={classes.menuButton}
        exact
        key={"login"}
        to={"/login"}
      >
        {"Login"}
      </NavLink>
    )
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(UsersItems);