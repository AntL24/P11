import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/images/logo_Kasa.svg" alt="Kasa" className="header-logo" />
      <nav>
      <NavLink to="/" exact="true"  activeclassname="active-link" className="header-link">Accueil</NavLink>
        <NavLink to="/about" activeclassname="active-link" className="header-link">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
