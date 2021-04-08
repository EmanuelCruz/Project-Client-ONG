import React from 'react'
import { NavLink } from "react-router-dom";
import DropDawnActivitiesComponente from './DropDawnActivities/DropDawnActivitiesComponent'


const HeaderItems = ({ items, drawerOpen, classes }) => {
  return (
    items.map((item, index) =>
      item.name === "Actividades" ? (
        <DropDawnActivitiesComponente key={item.name} item={item} drawerOpen={drawerOpen} />
      ) : (
        <NavLink
          activeClassName={classes.menuButtonActive}
          className={classes.menuButton}
          exact
          key={item.name + index}
          to={item.path}
        >
          {item.name}
        </NavLink>
      )
    )
  )
}

export default HeaderItems
