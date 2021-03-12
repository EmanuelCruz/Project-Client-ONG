import React from 'react';
import LogoComponent from './Logo/LogoComponent';
import MenuComponent from './Menu/MenuComponent';
import './Header.css';

export default function HeaderComponent() {
  return (
    <div className="header">
      <LogoComponent></LogoComponent>
      <MenuComponent></MenuComponent>
    </div>
  );
}
