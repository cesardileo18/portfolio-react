import React from 'react';
import ExperienciaCard from '../Components/ExperienciaCard';
import datosExperiencia from '../Data/experiencias.json';
import "../Css/experienciaCard.css"
import { useState, useEffect } from 'react';

import Spinner from '../Components/Spinner';

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
          <h2 className='text-center experiencia__laboral__h2'>Mi Experiencia Laboral</h2>
          <div className="experiencia-cards">
            {datosExperiencia.map((trabajo, index) => (
              <ExperienciaCard key={index} trabajo={trabajo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienciaLaboral;