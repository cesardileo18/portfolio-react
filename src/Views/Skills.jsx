import React from 'react';
import SkillsConfig from '../Components/SkillsConfig';
import skills from '../Data/skills.json';
import "../Css/skills.css"
import ParticlesBackgroundSnow from '../Components/ParticlesBackgroundSnow';
const Skills = () => {
    return (
        <div className="container-fluid skills">
            <ParticlesBackgroundSnow/>
            <h2 className='pt-5 text-center skills__h2'>Mis habilidades</h2>
            <div className="skills-content">
                <div className='contenerdor-cards d-flex align-content-around'>
                    {/* <div className="contenerdor-cards d-flex flex-sm-column"> */}
                    <div className="d-flex justify-content-center align-items-center flex-wrap flex-sm-wrap ">
                        {skills.map((skill, index) => (
                            <div className="col-5 col-sm-3 col-md-3 col-lg-2 card d-flex m-2 p-2 body-card-skill" key={index}>
                                <SkillsConfig skill={skill} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;