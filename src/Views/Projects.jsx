import projects from "../Data/projects.json"
import { useState, useEffect, React } from 'react';
import ProjectCard from "../Components/ProjectCard";
import "../Css/projects.css"
import Spinner from "../Components/Spinner";
import ScrollButton from '../Components/ScrollButton';
import { faCode, faDesktop, faDraftingCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() => {
        setShowSpinner(true)
        setTimeout(() => {
            setShowSpinner(false)
        }, 1500);
    }, [])
    return (
        <section className="main__projects main__projects--login">
            {showSpinner ? (
                <Spinner />
            ) : (
                <section className="main__projects p-3">
                    <div className="projects__contenedor__h1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faCode} className='mx-2 project__icon' />
                        <h1 className="projects__h1">Proyectos</h1>
                    </div>
                    <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 projects__cards">
                        {projects.map((project, index) => (
                            <div key={index} className="col projects__contain__cards">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </section>
                </section>
            )}
            <ScrollButton />
        </section>
    );
}

export default Projects;