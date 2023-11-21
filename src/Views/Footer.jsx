import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faLaptopCode, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import "../Css/footer.css";

const Footer = () => {
    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    const renderAdditionalDiv = () => {
        if (selectedIcon) {
            return (
                <div className="additional-div">
                </div>
            );
        }
        return null;
    };

    return (
        <footer>
            <section className="footer">
                <Link to="/inicio">
                    <div
                        className={`footer__icons ${location.pathname === '/inicio' ? 'selected' : ''}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIconClick('inicio')}
                    >
                        <FontAwesomeIcon icon={faHouseChimney} className="footer__icon" />
                        <span className="footer__p">Inicio</span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div
                        className={`footer__icons ${location.pathname === '/projects' ? 'selected' : ''}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIconClick('projects')}
                    >
                        <FontAwesomeIcon icon={faCode} className="footer__icon" />
                        <span className="footer__p">Proyectos</span>
                    </div>
                </Link>
                <Link to="/expirence">
                    <div
                        className={`footer__icons ${location.pathname === '/expirence' ? 'selected' : ''}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIconClick('expirence')}
                    >
                        <FontAwesomeIcon icon={faBriefcase} className="footer__icon" />
                        <span className="footer__p">Experiencia</span>
                    </div>
                </Link>
                <Link to="/skills">
                    <div
                        className={`footer__icons ${location.pathname === '/skills' ? 'selected' : ''}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIconClick('skills')}
                    >
                        <FontAwesomeIcon icon={faLaptopCode} className="footer__icon" />
                        <span className="footer__p">Habilidades</span>
                    </div>
                </Link>
                <Link to="/contact">
                    <div
                        className={`footer__icons ${location.pathname === '/contact' ? 'selected' : ''}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIconClick('contact')}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
                        <span className="footer__p">Contacto</span>
                    </div>
                </Link>
            </section>
            {renderAdditionalDiv()}
        </footer>
    );
};

export default Footer;