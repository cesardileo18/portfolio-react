import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';


const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false)
    const [showFullText, setShowFullText] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal-container')) {
            toggleModal();
        }
    };
    const getProjectLink = (type) => {
        if (type === 'demo') {
            return project.demo;
        } else if (type === 'repository') {
            return project.repository;
        }
    };
    const truncateDescription = (description) => {
        const words = description.split(' ');
        const truncatedText = words.slice(0, 21).join(' ');
        if (words.length > 21) {
            return `${truncatedText}...`;
        }
        return truncatedText;
    };
    return (
        <div className="card-project mb-3 rounded-1">
            <div className="position-relative">
                <div className="click-icon">
                    <FontAwesomeIcon icon={faHandPointer} />
                </div><img src={project.img} alt={`${project.name} Imagen`} className="card-img-top-project" style={{ cursor: 'pointer' }} onClick={toggleModal} />
                <div className="card-type-badge-project position-absolute bottom-0  start-0 p-2 text-white">
                    <p className="card__text__project">{project.projetType}</p>
                </div>
            </div>
            <div className="card-body-project my-2">
                <h5 className="card-title">{project.name}</h5>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="modal-container" onClick={handleModalClick}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close project" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center p-2'>
                                <img src={project.img} alt={`${project.name} Imagen`} className="card-img-top-modal" onClick={toggleModal} />
                            </div>
                            <h5 className="modal-title">{project.name}</h5>
                            <p className='my-2 text-white'>
                                {showFullText ? project.description : truncateDescription(project.description)}
                            </p>
                            {project.description.length > 21 && (
                                <p className="my-2" onClick={() => setShowFullText(!showFullText)}>
                                    {showFullText ? 'Mostrar menos' : 'Mostrar más'}
                                </p>
                            )}
                            <div className='d-flex justify-content-evenly'>
                                <a href={getProjectLink('demo')} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className='mx-2' /> Demo
                                </a>
                                <a href={getProjectLink('repository')} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className='mx-2' />Repositorio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;