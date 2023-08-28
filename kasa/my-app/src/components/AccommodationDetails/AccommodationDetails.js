import React, { useState, useEffect } from 'react';
import { useData } from '../../App.js';
import { useParams } from 'react-router-dom';
import NotFoundPage from './../NotFoundPage/NotFoundPage.js';
import Carousel from './../Carousel/Carousel.js';
import AccommodationInfo from './../AccommodationInfo/AccommodationInfo.js';
import './AccommodationDetails.scss';

function AccommodationDetails() {
  const { data, isLoading } = useData();
  const { id } = useParams();
  const accommodation = isLoading ? undefined : data.find(accommodation => accommodation.id === id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!accommodation) {
    return <NotFoundPage />;
  }

  return (
    <div className="accommodation-details">
      <Carousel pictures={accommodation.pictures}/>
      <AccommodationInfo accommodation={accommodation} />
    </div>
  );
}

export default AccommodationDetails;
