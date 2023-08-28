import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/images/logo_Kasa.svg" alt="Kasa" className="header-logo" />
      <nav>
        <Link to="/" className="header-link">Accueil</Link>
        <Link to="/about" className="header-link">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
