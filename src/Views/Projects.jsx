import projects from "../Data/projects.json"
import { useState, useEffect, React } from 'react';
import ProjectCard from "../Components/ProjectCard";
import "../Css/projects.css"
import Spinner from "../Components/Spinner";
const Projects = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() => {
        setShowSpinner(true)
        setTimeout(() => {
            setShowSpinner(false)
        }, 800);
    }, [])
    return (
        <section className="main__projectsLogin">
            {showSpinner ? (
                <Spinner />
            ) : (
                // <section className="main__projects">
                //     <div className="projects__contenedor__h1">
                //         <h1 className="projects__h1">Mis Proyectos</h1>
                //     </div>
                //     <section className="projects__cards">
                //         {
                //             projects.map((project, index) => (
                //                 <ProjectCard key={index} project={project} />
                //             ))
                //         }
                //     </section>
                // </section>
                <div className="projects__paginaEnConstruccion p-3"> 
                    <img src="/img/error404/pagina-en-construccion.png" alt="Página en construcción" className="projects__img__paginaEnConstruccion"/>
                    <h1>Sitio en Construcción</h1>
                    <p>Estamos trabajando para mejorar la experiencia. Vuelve pronto.</p>
                </div>

            )}
        </section>
    );
}

export default Projects;