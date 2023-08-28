import React from 'react';
import AccommodationPreview from './../AccommodationPreview/AccommodationPreview.js';
import './MainContent.scss';

const MainContent = ({ accommodations }) => (
    <div className="main-content">
        <div className = "body-banner">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src="/images/img_body.png" alt="Logo Kasa" />
        </div>
        <div className='accommodations-container'>
        {accommodations.map(accommodation => (
          <AccommodationPreview key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </div>
);

export default MainContent;
