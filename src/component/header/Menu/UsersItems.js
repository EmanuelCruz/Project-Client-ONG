import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

const UsersItems = ({ classes, isAuth }) => {
  return (
    isAuth.isAuth === true ? (
      <>
        <NavLink
          activeClassName={classes.menuButtonActive}
          className={classes.menuButton}
          exact
          key={"profile"}
          to={"/profile"}
        >
          {"Perfil"}
        </NavLink>
        <NavLink
          activeClassName={classes.menuButtonActive}
          className={classes.menuButton}
          exact
          key={"logout"}
          to={"/logout"}
        >
          {"Logout"}
        </NavLink>
      </>
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