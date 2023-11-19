import "../Css/experienciaCard.css"
import "bootstrap/dist/css/bootstrap.min.css"
const ExperienciaCard = ({ trabajo }) => {
    return (
        <div className="experiencia-card p-3">
            <div className="experiencia-card-info">
                <div className="experiencia-card-logo-container align-items-center d-sm-flex">
                    <a href={trabajo.url} target="_blank" >
                        <img src={trabajo.logo} alt={`${trabajo.empresa} Logo`} className="experiencia-logo me-3" />
                    </a>
                    <h3 className="experiencia__texto">{trabajo.puesto}</h3>
                </div>
                <p className="experiencia__texto"><strong>{trabajo.empresa}</strong> - {trabajo.periodo}</p>
                <p className="experiencia__texto">{trabajo.descripcion}</p>
            </div>
        </div>
    );
};
export default ExperienciaCard