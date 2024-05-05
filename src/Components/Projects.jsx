import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../Scss/Projects.scss"
import { useTranslation } from 'react-i18next'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    const { t } = useTranslation("global");
    const projects = t("project.projects", { returnObjects: true });
    return (
        <section id='Proyectos'>
            <div className="d-flex justify-content-center mt-3">
                <h1>{t("project.title")}</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    projects && projects.map((project, projectIndex) => {
                        return (
                            <div key={`project_${projectIndex}`}>
                                <SwiperSlide>
                                    <img src={project.img} alt={project.img} className='projets--img' />
                                    <div className="d-flex justify-content-center mt-3">
                                        <h6>{project.name}</h6>
                                    </div>
                                    <div className='d-flex justify-content-evenly mt-2'>
                                        <a href={project.demo} className="btn btn-secondary icon" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} className='mx-2' /> Demo
                                        </a>
                                        <a href={project.repository} className="btn btn-secondary icon" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} className='mx-2' /> Repo
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }

            </Swiper>
        </section>
    );
}

export default Projects;