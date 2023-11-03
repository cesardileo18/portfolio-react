import "../Css/skills.css"
const SkillsConfig = ({ skill }) => {
    return (
        <div className="container-card d-flex align-items-center justify-content-evenly">
            <img src={skill.logo} alt={`${skill.logo} Logo`} className="card-img-top skills-logo me-3" /><p className="card-text skill">{skill.nombre}</p>
        </div>
    );
};
export default SkillsConfig
