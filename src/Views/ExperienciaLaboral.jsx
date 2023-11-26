import React, { useState, useEffect } from 'react';
import ExperienciaCard from '../Components/ExperienciaCard';
import datosExperiencia from '../Data/experiencias.json';
import "../Css/experienciaCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../Components/Spinner';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ScrollButton from '../Components/ScrollButton';
import ReactGA from 'react-ga';

const ExperienciaLaboral = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 800);
    const idAnalytic = import.meta.env.VITE_GA_ID

    // Inicializar ReactGA con ID de seguimiento
    ReactGA.initialize(idAnalytic);
    // Enviar una página vista inicial al cargar la aplicación
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section className="experiencia-container-loading">
      {showSpinner ? (
        <Spinner />
      ) : (
        <main className="experiencia-container p-3">
          <header className="containerExperiencia d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faBriefcase} className='mx-2 icon__experience__logo' />
            <h2 className='text-center experience__laboral__h2'>Experiencia Laboral</h2>
          </header>
          <section className="row">
            {datosExperiencia.map((trabajo, index) => (
              <article key={index} className="col-xxl-6 col-xl-6 col-md-6 col-12 my-2">
                <ExperienciaCard trabajo={trabajo} />
              </article>
            ))}
          </section>
        </main>
      )}
      <ScrollButton />
    </section>
  );
};

export default ExperienciaLaboral;