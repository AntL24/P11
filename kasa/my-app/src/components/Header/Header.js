import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/images/logo_Kasa.svg" alt="Kasa" className="header-logo" />
      <nav>
        {/* exact="true" to avoid the active class to be applied to both links */}
        {/* If /about had a subpage, we would have to use the "exact" prop on the parent route */}
        <NavLink to="/" exact="true" activeclassname="active-link" className="header-link">Accueil</NavLink>
        <NavLink to="/about" activeclassname="active-link" className="header-link">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
