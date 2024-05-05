import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Scss/Footer.scss";
import { faNapster } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import { useTranslation } from 'react-i18next'
import { faAddressBook, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faTerminal, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [t, i18n] = useTranslation("global")
    return (
        <footer>
            <nav className="footer">
                <div
                    className={'footer__icon-container'}
                >
                     <a href='#Inicio' className="footer__label"><FontAwesomeIcon icon={faHouseChimney} className="footer__icon" title={t("footer.home")}/></a>
                    <a href='#Inicio' className="footer__label"><p className='footer--mobile'>{t("footer.home")}</p></a>
                </div>
                <div
                    className={'footer__icon-container'}
                >
                    <a href='#Biografia' className="footer__label"><FontAwesomeIcon icon={faAddressBook} className="footer__icon"title={t("footer.aboutMe")} /></a>
                    <a href='#Biografia' className="footer__label"><p className='footer--mobile'>{t("footer.aboutMe")}</p></a>
                </div>
                <div
                    className={'footer__icon-container'}
                >
                    <a href='#Experiencia' className="footer__label"><FontAwesomeIcon icon={faBriefcase} className="footer__icon" title={t("footer.workExperience")} /></a>
                    <a href='#Experiencia' className="footer__label"><p className='footer--mobile'>{t("footer.workExperience")}</p></a>
                </div>
                <div
                    className={'footer__icon-container'}
                >
                    <a href='#Educacion' className="footer__label"><FontAwesomeIcon icon={faUserGraduate} className="footer__icon"title={t("footer.education")} /></a>
                    <a href='#Educacion' className="footer__label"><p className='footer--mobile'>{t("footer.education")}</p></a>
                </div>
                <div
                    className={'footer__icon-container'}
                >
                    <a href='#Proyectos' className="footer__label"><FontAwesomeIcon icon={faTerminal} className="footer__icon" title={t("footer.projects")}/></a>
                    <a href='#Proyectos' className="footer__label"><p className='footer--mobile'>{t("footer.projects")}</p></a>
                </div>
                <div
                    className={'footer__icon-container'}
                >
                    <a href='#Contacto' className="footer__label"><FontAwesomeIcon icon={faEnvelope} className="footer__icon" title={t("footer.contact")} /></a>
                    <a href='#Contacto' className="footer__label"><p className='footer--mobile'>{t("footer.contact")}</p></a>
                </div>
            </nav>
        </footer>
    );
};
export default Footer;
