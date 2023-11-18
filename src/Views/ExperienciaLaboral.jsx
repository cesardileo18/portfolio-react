import React from 'react';
import ExperienciaCard from '../Components/ExperienciaCard';
import datosExperiencia from '../Data/experiencias.json';
import "../Css/experienciaCard.css"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../Components/Spinner';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ScrollButton from '../Components/ScrollButton';


const ExperienciaLaboral = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    setShowSpinner(true)
    setTimeout(() => {
      setShowSpinner(false)
    }, 800);
  }, [])
  return (
    <div className="experiencia-container-loading">
      {showSpinner ? (
        <Spinner />
      ) : (
        <div className="experiencia-container p-3">
          <div className="containerExperiencia d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faBriefcase} className='mx-2 icon__expirence__logo'/><h2 className='text-center experiencia__laboral__h2'>Mi Experiencia Laboral</h2>
          </div>
          <div className="experiencia-cards">
            {datosExperiencia.map((trabajo, index) => (
              <ExperienciaCard key={index} trabajo={trabajo} />
            ))}
          </div>
        </div>
      )}
      <ScrollButton/>
    </div>
  );
};

export default ExperienciaLaboral;