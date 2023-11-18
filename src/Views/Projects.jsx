import projects from "../Data/projects.json"
import { useState, useEffect, React } from 'react';
import ProjectCard from "../Components/ProjectCard";
import "../Css/projects.css"
import Spinner from "../Components/Spinner";
import ScrollButton from '../Components/ScrollButton';

const Projects = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() => {
        setShowSpinner(true)
        setTimeout(() => {
            setShowSpinner(false)
        }, 1500);
    }, [])
    return (
        <section className="main__projectsLogin">
            {showSpinner ? (
                <Spinner />
            ) : (
                <section className="main__projects p-3">
                <div className="projects__contenedor__h1">
                    <h1 className="projects__h1">Mis Proyectos</h1>
                </div>
                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 projects__cards">
                    {projects.map((project, index) => (
                        <div key={index} className="col projects__Contain__cards">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </section>
            </section>
                // <div className="projects__paginaEnConstruccion p-3"> 
                //     <img src="/img/error404/pagina-en-construccion.png" alt="Página en construcción" className="projects__img__paginaEnConstruccion"/>
                //     <h1>Sitio en Construcción</h1>
                //     <p>Estamos trabajando para mejorar la experiencia. Vuelve pronto.</p>
                // </div>

            )}
            <ScrollButton/>
        </section>
    );
}

export default Projects;