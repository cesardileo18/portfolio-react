import { useTranslation } from 'react-i18next'
import "../Scss/WorkExperience.scss"
const WorkExperience = () => {
    const { t } = useTranslation("global");
    const workExperience = t("workExperiences.arrayExperiences", { returnObjects: true });
    return (
        <section id='Experiencia'>
            <div className="experiencia--contendor--tituloPrincipal d-flex justify-content-center">
                <h1 className="experiencia--tituloPrincipal">{t("workExperiences.title")}</h1>
            </div>
            <div className='experiencia--dataIq p-3'>
                {workExperience && workExperience.map((work, workIndex) => {
                    return (
                        <div key={`work_${workIndex}`} className='m-3'>
                            <div className="experiencia--contendor--tituloPrincipal d-flex">
                                <h2 className="experiencia--tituloPrincipal"><strong>{work.position}</strong></h2>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href={t("workExperiences.dataIq.url")} target="_blank" rel="noopener noreferrer">
                                    <img src={work.logo} alt={`${work.company} Logo`} className="experience-logo me-3" />
                                </a>
                                <p>{work.period}</p>
                            </div>
                            <article>
                                <p>{work.description}</p>
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default WorkExperience;