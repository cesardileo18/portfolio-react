const ProjectCard = ({ project }) => {
    return (
        <div className="card__project">
            <div className="card__project__contain__img">
                <img src={project.img} alt={`${project.name} Imagen`} className="card__project__img" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.projetType}</p>
            </div>
        </div>
    );
}

export default ProjectCard;