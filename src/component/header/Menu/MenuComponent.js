import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from './MenuComponentStyles'

export default function MenuComponent() {
    const items = [
        {
            texto: "Inicio",
            ruta: "/",
        },
        {
            texto: "Nosotros",
            ruta: "/nosotros",
        },
        {
            texto: "Profile",
            ruta: "/profile",
        },
        {
            texto: "Signup",
            ruta: "/signup",
        },
        {
            texto: "Contacto",
            ruta: "/contacto",
        },
        {
            texto: "Backoffice",
            ruta: "/backoffice",
        },
    ];

    const classes = useStyles();
    const renderItems = () => {
        return items.map((item, index) => (
                <NavLink
                    activeClassName={classes.menuButtonActive}
                    className={classes.menuButton}
                    exact
                    key={index}
                    to={item.ruta}
                >
                    {item.texto}
                </NavLink>
        ));
    };

    return (
        <div className={classes.menu}>
            <ul className={classes.menuUl}>{renderItems()}</ul>
        </div>
    );
}
