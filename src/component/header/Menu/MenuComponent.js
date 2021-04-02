import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useStyles from './MenuComponentStyles'
import DropDawnActivitiesComponente from './DropDawnActivities/DropDawnActivitiesComponent'

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
        name: "Signup",
        path: "/signup",
    },
    {
        texto: "Novedades",
        ruta: "/novedades"
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

export default function MenuComponent({drawerOpen}) {
    const classes = useStyles();
    const [items, setItems] = useState(myItems);

    const renderItems = () => {
        return items.map((item, index) =>
            item.name === "Actividades" ? (
                <DropDawnActivitiesComponente item={item} drawerOpen={drawerOpen}/>
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
            <ul className={classes.menuUl}>{renderItems()}</ul>
        </div>
    );
}
