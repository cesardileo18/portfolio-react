import React from "react";
import Footer from "./Views/Footer";
import Inicio from "./Views/Inicio";
import Skills from "./Views/Skills";
import Projects from "./Views/Projects";
import "./Css/app.css"
import ExperienciaLaboral from "./Views/ExperienciaLaboral";
import Contacto from "./Views/Contacto";
import Error from "./Views/Error";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/expirence" element={<ExperienciaLaboral />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer />
        </main>
    );
}
export default App;