import React from 'react';
import ExperienciaCard from '../Components/ExperienciaCard';
import datosExperiencia from '../Data/experiencias.json';
import "../Css/experienciaCard.css"

const ExperienciaLaboral = () => {
  return (
    <div className="experiencia-container p-3 mt-3">
      <h2 className='pt-5 text-center experiencia__laboral__h2'>Mi Experiencia Laboral</h2>
      <div className="experiencia-cards">
        {datosExperiencia.map((trabajo, index) => (
          <ExperienciaCard key={index} trabajo={trabajo} />
        ))}
      </div>
    </div>
  );
};

export default ExperienciaLaboral;