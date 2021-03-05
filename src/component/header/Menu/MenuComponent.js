import React from "react";
import "./Menu.css";

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
            texto: "Actividades",
            ruta: "/actividades",
        },
        {
            texto: "Novedades",
            ruta: "/novedades",
        },
        {
            texto: "Contacto",
            ruta: "/contacto",
        },
    ];

    const renderItems = () => {
        return items.map((item, index) => (
            <li key={index} className="menu__li">
                {item.texto}
            </li>
        ));
    };

    return (
        <div className="menu">
            <ul className="menu__ul">{renderItems()}</ul>
        </div>
    );
}
