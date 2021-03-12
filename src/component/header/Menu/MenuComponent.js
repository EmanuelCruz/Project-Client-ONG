import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function MenuComponent() {
  const items = [
    {
      texto: 'Inicio',
      ruta: '/',
    },
    {
      texto: 'Nosotros',
      ruta: '/nosotros',
    },
    {
      texto: 'Profile',
      ruta: '/profile',
    },
    {
      texto: 'Singup',
      ruta: '/singup',
    },
    {
      texto: 'Contacto',
      ruta: '/contacto',
    },
    {
      texto: 'Backoffice',
      ruta: '/backoffice',
    },
  ];

  const renderItems = () => {
    return items.map((item, index) => (
      <NavLink
        activeClassName="menu__li--active"
        className="menu__li"
        exact
        key={index}
        to={item.ruta}
      >
        {item.texto}
      </NavLink>
    ));
  };

  return (
    <div className="menu">
      <ul className="menu__ul">{renderItems()}</ul>
    </div>
  );
}
