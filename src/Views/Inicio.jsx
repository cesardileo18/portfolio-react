import "../Css/inicio.css"
import ParticlesBackground from "../Components/ParticlesBackground";
const Inicio = () => {
    return (
        <div className="inicioPage">
            <ParticlesBackground />
            <div className="inicio-content">
                <header className="inicio p-3">
                    <h1 className="inicio__header__h1">Cesar Acacio Di Leonardo</h1>
                    <img src="./img/imgCv.webp" alt="imagen Curriculum" className="inicio__header__img__cv ms-3" />
                </header>
                <section className="inicio p-3" >
                    <div className="inicio__img">
                        <img src="./img/imgCv.webp" alt="imagen Curriculum" className="inicio__img__cv" />
                    </div>
                    <h2 className="text-center mt-5">Programador Full Stack</h2>
                    <div className="inicio__img__programacion mt-5">
                        <img src="./img/imagInicio.png" alt="imagen Progamación" className="inicio__img__dev" />
                    </div>
                    <article className="p-3 mt-5">
                        <h2>Sobre Mí</h2>
                        <p>Soy un desarrollador web con experiencia en el desarrollo full stack.
                            Mi objetivo es seguir creciendo como profesional en el campo de desarrollo
                            web, aprovechando mis habilidades en la programación front-end y back-end
                            para crear soluciones innovadoras y eficientes.</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Inicio;