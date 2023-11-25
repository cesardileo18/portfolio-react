import React from 'react';
import SkillsConfig from '../Components/SkillsConfig';
import skills from '../Data/skills.json';
import certificates from '../Data/certificates.json';
import education from "../Data/educacion.json"
import "../Css/skills.css"
import ParticlesBackgroundSnow from '../Components/ParticlesBackgroundSnow';
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
import EducacionCard from '../Components/EducacionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faPuzzlePiece, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import CertificatesCard from '../Components/CertificatesCard';
import ScrollButton from '../Components/ScrollButton';
const Skills = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() => {
        setShowSpinner(true)
        setTimeout(() => {
            setShowSpinner(false)
        }, 1600);
    }, [])
    const renderCertificateSections = () => {
        const sections = [];

        for (let i = 0; i < certificates.length; i += 2) {
            const certificate1 = certificates[i];
            const certificate2 = i + 1 < certificates.length ? certificates[i + 1] : null;

            sections.push(
                <section key={i} className="container-section-certificate col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 m-2">
                    {<CertificatesCard certificate={certificate1} />}
                    {certificate2 && <CertificatesCard certificate={certificate2} />}
                </section>
            );
        }
        return sections;
    };
    return (
        <div className='contain-skill-spinner'>
            {showSpinner ? (
                <Spinner />
            ) : (
                <div className="container-fluid skills p-3">
                    <ParticlesBackgroundSnow />
                    <div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faCog} className='mx-2 skills__icon' /><h2 className='text-center skills__h2'>Habilidades</h2>
                    </div>
                    <div className="skills-content">
                        <div className='contenerdor-cards d-flex align-content-around'>
                            <div className="d-flex justify-content-center align-items-center flex-wrap flex-sm-wrap ">
                                {skills.map((skill, index) => (
                                    <div className="col-5 col-sm-3 col-md-3 col-lg-2 card d-flex m-2 p-3 body-card-skill" key={index}>
                                        <SkillsConfig skill={skill} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="education-section">
                        <div className="education-section-title d-flex align-items-center justify-content-center my-2">
                            <FontAwesomeIcon icon={faUserGraduate} className='mx-2 education-section-title' />  <h2>Mi Educación</h2>
                        </div>
                        <div className="row d-flex justify-content-lg-evenly justify-content-md-evenly container-education">
                            {education.map((edu, index) => (
                                <div className="col-lg-6 col-md-5 col-sm-12 col-12 mb-4" key={index}>
                                    <EducacionCard education={edu} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="mobile d-flex align-items-center justify-content-center my-2">
                            <FontAwesomeIcon icon={faGraduationCap} className='mx-2 education-section-title' /><h2>Certificaciones</h2>
                        </div>
                        <section className='certificates d-flex ms-md-2 ms-sm-2 ms-2'>
                            {renderCertificateSections()}
                        </section>
                    </div>
                    <div className="education-section">
                        <div className="certificate-title d-flex align-items-center justify-content-center my-2">
                            <FontAwesomeIcon icon={faGraduationCap} className='mx-2 education-section-title' /><h2>Certificaciones</h2>
                        </div>
                        <div className="row certificate-desktop">
                            {certificates.map((certificate, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-2" key={index}>
                                    <CertificatesCard certificate={certificate} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <ScrollButton />
        </div>
    );
}

export default Skills;