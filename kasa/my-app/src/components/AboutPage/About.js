import React from "react";
import AccordionPanel from "./../AccordionPannel/AccordionPannel.js";
import "./About.scss";

//Simple page with an image and multiple accordion panels containing rules and values of the company
const AboutPage = () => (
  <div className="about-page">
    <img src="/images/img_about.png" className="about-banner" alt="Paysage de montagne" />

    <AccordionPanel title="Fiabilité">
      Les annonces portées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
    </AccordionPanel>
    <AccordionPanel title="Respect">
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
    </AccordionPanel>
    <AccordionPanel title="Service">
      Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.
    </AccordionPanel>
    <AccordionPanel title="Sécurité">
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
    </AccordionPanel>
  </div>
);

export default AboutPage;
