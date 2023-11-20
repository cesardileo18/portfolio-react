import React, { useEffect } from "react";
import Footer from "./Views/Footer";
import Inicio from "./Views/Inicio";
import Skills from "./Views/Skills";
import Projects from "./Views/Projects";
import "./Css/app.css"
import ExperienciaLaboral from "./Views/ExperienciaLaboral";
import Contacto from "./Views/Contacto";
import Error from "./Views/Error";
import { Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
const App = () => {
    const idAnalytic = import.meta.env.VITE_GA_ID
    useEffect(() => {
        // Inicializar ReactGA con ID de seguimiento
        ReactGA.initialize(idAnalytic);
        // Enviar una página vista inicial al cargar la aplicación
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/expirence" element={<ExperienciaLaboral />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </main>
    );
}
export default App;