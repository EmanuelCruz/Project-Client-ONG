import React from 'react'
import { NavLink } from "react-router-dom";
import DropDawnActivitiesComponente from './DropDawnActivities/DropDawnActivitiesComponent'
import { connect } from 'react-redux'


const AdminItems = ({ classes, isAdmin }) => {
  return (
    isAdmin.isAdmin === true ? (
      <NavLink
        activeClassName={classes.menuButtonActive}
        className={classes.menuButton}
        exact
        key={"backoffice"}
        to={"/backoffice"}
      >
        {"Backoffice"}
      </NavLink>
    ) : (null
    )
  )
}

function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin
  }
}

export default connect(mapStateToProps)(AdminItems);