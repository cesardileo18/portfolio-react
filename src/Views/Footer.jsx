import "../Css/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faLaptopCode, faBriefcase, faEnvelope, faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Footer = () => {
    const inicio = () => {
        window.location.href = "https://www.google.com/"
    }
    return (
        <footer>
            <section className="footer">
                <Link to="/inicio">
                    <div className="footer__icons" style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faHouseChimney} className="footer__icon" />
                        <span className="footer__p">
                            Inicio
                        </span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="footer__icons" style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faCode} className="footer__icon" />
                        <span className="footer__p">
                        Proyectos
                        </span>
                    </div>
                </Link>
                <Link to="/expirence">
                    <div className="footer__icons" style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faBriefcase} className="footer__icon" />
                        <span className="footer__p">
                        Experiencia
                        </span>
                    </div>
                </Link>
                <Link to="/skills">
                    <div className="footer__icons" style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faLaptopCode} className="footer__icon" />
                        <span className="footer__p">
                        Habilidades
                        </span>
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="footer__icons" style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
                        <span className="footer__p">
                        Contacto
                        </span>
                    </div>
                </Link>
            </section>
        </footer>
    );
}
export default Footer;