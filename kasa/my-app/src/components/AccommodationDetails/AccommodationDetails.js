import React, { useState, useEffect } from 'react';
import { useData } from '../../App.js';
import { useParams } from 'react-router-dom';
import NotFoundPage from './../NotFoundPage/NotFoundPage.js';
import Carousel from './../Carousel/Carousel.js';
import AccommodationInfo from './../AccommodationInfo/AccommodationInfo.js';
import './AccommodationDetails.scss';

//Details of the accommodation
//Give back the information about the accommodation, the host and the rating
//Or a loading message if the data is not loaded yet
//Or a not found page if the accommodation does not exist
function AccommodationDetails() {
  const { data, isLoading } = useData();
  const { id } = useParams();

  //We wait for the data to be loaded before displaying the page. Then we check if the accommodation exists or not.
  const accommodation = isLoading ? undefined : data.find(accommodation => accommodation.id === id);
  

  if (isLoading) {
    return <div className="loading">Loading...</div>;
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
