import "../Css/inicio.css";
import ParticlesBackground from "../Components/ParticlesBackground";
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
import ScrollButton from '../Components/ScrollButton';
import ReactGA from 'react-ga';

const Inicio = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
        }, 1500);
        const idAnalytic = import.meta.env.VITE_GA_ID
        // Inicializar ReactGA con ID de seguimiento
        ReactGA.initialize(idAnalytic);
        // Enviar una página vista inicial al cargar la aplicación
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className="inicioPage">
            {showSpinner ? (
                <div className="spinner-container">
                    <Spinner />
                </div>
            ) : (
                <div className="inicio-content">
                    <ParticlesBackground />
                    <header className="inicio-header p-3">
                        <h1 className="inicio-header__h1">Cesar Acacio Di Leonardo</h1>
                        <img src="./img/imgCv.webp" alt="imagen Curriculum" className="inicio-header__img-cv__mobile ms-3" />
                    </header>
                    <section className="inicio-section p-3" >
                        <div className="inicio-img-desktop">
                            <img src="./img/imgCv.webp" alt="imagen Curriculum" className="inicio-img__cv__desktop" />
                        </div>
                        <h2 className="text-center mt-5">Programador Full Stack</h2>
                        <div className="inicio-img-programacion mt-5">
                            <img src="./img/imagInicio.png" alt="imagen Progamación" className="inicio-img__dev" />
                        </div>
                        <article className="inicio-article p-3 mt-5">
                            <h2>Sobre Mí</h2>
                            <p>Soy un desarrollador web con experiencia en el desarrollo full stack.
                                Mi objetivo es seguir creciendo como profesional en el campo de desarrollo
                                web, aprovechando mis habilidades en la programación front-end y back-end
                                para crear soluciones innovadoras y eficientes.</p>
                        </article>
                    </section>
                </div>
            )}
            <ScrollButton />
        </div>
    );
}

export default Inicio;
