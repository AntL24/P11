import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => (
    <div className="not-found-page">
        <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="homepage-link">Retourner sur la page d'accueil</Link>
    </div>
);

export default NotFoundPage;
