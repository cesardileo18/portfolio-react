import React from "react";
import Footer from "./Views/Footer";
import Inicio from "./Views/Inicio";
import Skills from "./Views/Skills";
import "./Css/app.css"
import ExperienciaLaboral from "./Views/ExperienciaLaboral";
const App = () => {
    return (
        <div>
            <main className="app">
                <Inicio/>
                <ExperienciaLaboral/>
                <Skills/>
            </main>
            <Footer />
        </div>
    );
}
export default App;