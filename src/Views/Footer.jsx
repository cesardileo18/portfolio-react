import React, { useState } from 'react';
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
        <section className="footer__additional-div"></section>
      );
    }
    return null;
  };

  return (
    <footer>
      <nav className="footer">
        <Link to="/inicio">
          <div
            className={`footer__icon-container ${location.pathname === '/inicio' ? 'selected' : ''}`}
            onClick={() => handleIconClick('inicio')}
          >
            <FontAwesomeIcon icon={faHouseChimney} className="footer__icon" />
            <span className="footer__label">Inicio</span>
          </div>
        </Link>
        <Link to="/projects">
          <div
            className={`footer__icon-container ${location.pathname === '/projects' ? 'selected' : ''}`}
            onClick={() => handleIconClick('projects')}
          >
            <FontAwesomeIcon icon={faCode} className="footer__icon" />
            <span className="footer__label">Proyectos</span>
          </div>
        </Link>
        <Link to="/expirence">
          <div
            className={`footer__icon-container ${location.pathname === '/expirence' ? 'selected' : ''}`}
            onClick={() => handleIconClick('expirence')}
          >
            <FontAwesomeIcon icon={faBriefcase} className="footer__icon" />
            <span className="footer__label">Experiencia</span>
          </div>
        </Link>
        <Link to="/skills">
          <div
            className={`footer__icon-container ${location.pathname === '/skills' ? 'selected' : ''}`}
            onClick={() => handleIconClick('skills')}
          >
            <FontAwesomeIcon icon={faLaptopCode} className="footer__icon" />
            <span className="footer__label">Habilidades</span>
          </div>
        </Link>
        <Link to="/contact">
          <div
            className={`footer__icon-container ${location.pathname === '/contact' ? 'selected' : ''}`}
            onClick={() => handleIconClick('contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <span className="footer__label">Contacto</span>
          </div>
        </Link>
      </nav>
      {renderAdditionalDiv()}
    </footer>
  );
};

export default Footer;
