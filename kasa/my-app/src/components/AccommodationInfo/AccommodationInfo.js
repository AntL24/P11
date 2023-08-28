import React from 'react';
import './AccommodationInfo.scss';
import AccordionPanel from '../AccordionPannel/AccordionPannel';


function AccommodationInfo({ accommodation }) {
    return (
        <div className="accommodation-info">
            <div className="modalities-container">
                <div className="info-left">
                    <h1 className="accommodation-title">{accommodation.title}</h1>
                    <p className="accommodation-location">{accommodation.location}</p>
                    <div className="tags-container">
                        {accommodation.tags.map(tag => (
                            <div className="tag" key={tag}>{tag}</div>
                        ))}
                    </div>
                </div>

                <div className="info-right">
                    <div className="host">
                        <div className="host-name-container">
                            <p className="host-first-name">{accommodation.host.name.split(" ")[0]}</p>
                            <p className="host-last-name">{accommodation.host.name.split(" ")[1]}</p>
                        </div>
                        <img
                            src={accommodation.host.picture}
                            alt={accommodation.host.name}
                            className="host-picture"
                        />
                    </div>
                    <div className="rating">
                        {Array(5).fill().map((_, i) => (
                            <i key={i} className={`fas fa-star ${i < accommodation.rating ? 'red' : 'grey'}`}></i>
                        ))}
                    </div>

                </div>
            </div>

            <div className="accordion-container">
                <AccordionPanel title="Description">
                    <p>{accommodation.description}</p>
                </AccordionPanel>
                <AccordionPanel title="Equipments">
                    <ul>
                        {accommodation.equipments.map(equipment => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </AccordionPanel>
            </div>
        </div>
    );
}

export default AccommodationInfo;
