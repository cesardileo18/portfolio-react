import React from 'react';
import SkillsConfig from '../Components/SkillsConfig';
import skills from '../Data/skills.json';
import "../Css/skills.css"
import ParticlesBackgroundSnow from '../Components/ParticlesBackgroundSnow';
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
const Skills = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() => {
        setShowSpinner(true)
        setTimeout(() => {
            setShowSpinner(false)
        }, 700);
    }, [])
    return (
        <div className='contain-skill-spinner'>
            {showSpinner ? (
                <Spinner />
            ) : (
                <div className="container-fluid skills p-3">
                    <ParticlesBackgroundSnow />
                    <h2 className='text-center skills__h2'>Mis habilidades</h2>
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
                </div>
            )}
        </div>
    );
}

export default Skills;