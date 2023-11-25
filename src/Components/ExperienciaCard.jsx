import React, { useState } from "react";
import "../Css/experienciaCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ExperienciaCard = ({ trabajo }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncateDescription = (trabajo) => {
    const words = trabajo.split(' ');
    const truncatedText = words.slice(0, 62).join(' ');
    if (words.length > 62) {
      return `${truncatedText}...`;
    }
    return truncatedText;
  };

  return (
    <article className="experience-card p-3 rounded-2">
      <section className="experience-card-info">
        <div className="experience-card-logo-container align-items-center d-sm-flex">
          <a href={trabajo.url} target="_blank" rel="noopener noreferrer">
            <img src={trabajo.logo} alt={`${trabajo.empresa} Logo`} className="experience-logo me-3" />
          </a>
          <h3 className="experience__text">{trabajo.puesto}</h3>
        </div>
        <p className="experience__text my-1">
          <strong>{trabajo.empresa}</strong> - {trabajo.periodo}
        </p>
        <p className="experience__text">
          {showFullText ? trabajo.descripcion : truncateDescription(trabajo.descripcion)}
        </p>
        {trabajo.descripcion.length > 310 && (
          <p className="my-2" onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? 'Mostrar menos' : 'Mostrar más'}
          </p>
        )}
      </section>
    </article>
  );
};

export default ExperienciaCard;