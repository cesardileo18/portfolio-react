import spainFlag from "../assets/Spain (ES).svg"
import italyFlag from "../assets/Italy.svg"
import usaFlag from "../assets/United states.svg"
import { useTranslation } from 'react-i18next'
import "../Scss/Navbar.scss"
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [t, i18n] = useTranslation("global");
    const [showFlags, setShowFlags] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("es");

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setCurrentLanguage(storedLanguage); // Establece el idioma actual
            i18n.changeLanguage(storedLanguage);
        } else {
            // Si no hay idioma almacenado, establecer español como predeterminado
            i18n.changeLanguage("es");
            localStorage.setItem('language', "es"); // Establece el idioma en localStorage
        }
    }, []);

    // Función para cambiar el idioma y almacenarlo en el localStorage
    const changeLanguages = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        setCurrentLanguage(language); // Actualiza el idioma actual
    };

    return (
        <section className="navbar d-flex justify-content-end">
            <div className="d-flex navbar--flags" onMouseEnter={() => setShowFlags(true)} onMouseLeave={() => setShowFlags(false)}>
                {showFlags && (
                    <>
                        <img src={spainFlag} alt="Bandera de España" className="flag" onClick={() => changeLanguages("es")} />
                        <img src={usaFlag} alt="Bandera de EEUU" className="flag" onClick={() => changeLanguages("en")} />
                        <img src={italyFlag} alt="Bandera de Italia" className="flag" onClick={() => changeLanguages("it")} />
                    </>
                )}
                {!showFlags && (
                    <img src={currentLanguage === "es" ? spainFlag : currentLanguage === "en" ? usaFlag : italyFlag} alt={`Bandera de ${currentLanguage === "es" ? "España" : currentLanguage === "en" ? "EEUU" : "Italia"}`} className={`flag ${showFlags ? 'show' : ''}`} onClick={() => changeLanguages(currentLanguage)} />
                )}
            </div>
        </section>
    );
}

export default Navbar;
