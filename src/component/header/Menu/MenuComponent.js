import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useStyles from './MenuComponentStyles'
import DropDawnActivitiesComponente from './DropDawnActivities/DropDawnActivitiesComponent'
import HeaderItems from "./HeaderItems";
import UsersItems from "./UsersItems";

const myItems = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Nosotros",
    path: "/nosotros",
  },
  {
    name: "Actividades",
    path: "/activities/1",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Novedades",
    path: "/novedades"
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
  {
    name: "Backoffice",
    path: "/backoffice",
  },
];

export default function MenuComponent({ drawerOpen }) {
  const classes = useStyles();
  const [items, setItems] = useState(myItems);

  const renderItems = () => {
    return items.map((item, index) =>
      item.name === "Actividades" ? (
        <DropDawnActivitiesComponente key={item.name} item={item} drawerOpen={drawerOpen} />
      ) : (
        <NavLink
          activeClassName={classes.menuButtonActive}
          className={classes.menuButton}
          exact
          key={item.name}
          to={item.path}
        >
          {item.name}
        </NavLink>
      )
    );
  };

  return (
    <div className={classes.menu}>
      <ul className={classes.menuUl}>
        <HeaderItems items={items} classes={classes} drawerOpen={drawerOpen} />
        <UsersItems classes={classes} />
      </ul>
    </div>
  );
}
