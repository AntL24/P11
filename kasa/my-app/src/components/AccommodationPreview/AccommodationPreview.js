import React from 'react';
import './AccommodationPreview.scss';
import { Link } from 'react-router-dom';

const AccommodationPreview = ({ accommodation }) => (
    <Link to={`/accommodation/${accommodation.id}`} className="accommodation">
        <img src={accommodation.cover} alt={accommodation.title} className="accommodation-image" />
        <h2 className="accommodation-title">{accommodation.title}</h2>
    </Link>
);

export default AccommodationPreview;
