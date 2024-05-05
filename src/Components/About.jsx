import "../Scss/About.scss"
import skills from "../Data/skills.json"
import { useTranslation } from 'react-i18next'
const About = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id="Biografia" className="p-3">
            <div className="sobreMi--contendor--tituloPrincipal d-flex justify-content-center">
                <h1 className="sobreMi--tituloPrincipal">{t("aboutMe.title")}</h1>
            </div>
            <div className="sobreMi--contenedor d-flex">
                <div className="row">
                    <section className="sobreMi--contenido col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <article>
                            {t("aboutMe.descriptionUno")}
                            <br /><br />
                            {t("aboutMe.descriptionDos")}
                            <br /><br />
                            {t("aboutMe.descriptionTres")}
                            <br /><br />
                            {t("aboutMe.descriptionCuatro")}
                        </article>
                    </section>
                    <section className="sobreMi--habilidades col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                        <div className="sobreMi--contendor--tituloHabilidades d-flex justify-content-center">
                            <h2 className="sobreMi--tituloHabilidades m-2">{t("aboutMe.subTitle")}</h2>
                        </div>
                        <div className="sobreMi--contenedor--habilidades d-flex justify-content-center">
                            {skills && skills.map((skill, skillIndex) => {
                                return (
                                    <div key={`skillIndex_${skillIndex}`} className="sobreMi--cards--habilidades d-flex flex-column align-items-center justify-content-center">
                                        <img src={skill.logo} alt="skill.logo" />
                                        <p className="sobreMi--cards--habilidades--name">{skill.nombre}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default About;