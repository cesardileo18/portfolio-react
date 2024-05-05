import { useTranslation } from 'react-i18next'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import "../Scss/Education.scss"
const Education = () => {
    const { t } = useTranslation("global");
    const educations = t("education.educations", { returnObjects: true });
    const certificates = t("certificates.certificate", { returnObjects: true });
    return (
        <section id='Educacion'>
            <section className="education-container">
                <div className="d-flex justify-content-center">
                    <h1>{t("education.title")}</h1>
                </div>
                <div className="education-container--certificates d-flex justify-content-evenly">
                    {educations && educations.map((education, educationIndex) => {
                        return (
                            <div key={`education_${educationIndex}`} className="education-container--cards m-2 d-flex flex-column justify-content-center align-items-center">
                                {education.image === "" ? "" : (<img src={education.image} alt={education.name} className='cards--img' />)}
                                <p className='date'>{education.date}</p>
                                <p className='name'>{education.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='education-container--certificates--mobile'>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-2"
                    >
                        {educations && educations.map((edu, eduIndex) => {
                            return (
                                <div key={`edu_${eduIndex}`}>
                                    <SwiperSlide>
                                        {edu.image === "" ? "" : (<img src={edu.image} alt={edu.name} className='cards--img' />)}
                                        <div className='d-flex flex-column justify-content-between align-items-center'>
                                            <p className='date'>{edu.date}</p>
                                            <p className='name'>{edu.name}</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section className="certificates-container mt-3">
                <div className="d-flex justify-content-center">
                    <h1>{t("certificates.title")}</h1>
                </div>
                <div>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {certificates && certificates.map((certificate, certificateIndex) => {
                            return (
                                <div key={`certificate_${certificateIndex}`}>
                                    <SwiperSlide>
                                        <div className="container--certificate">
                                            <img src={certificate.image} alt={certificate.image} className='certificates--card--img' />
                                            <div className='d-flex flex-column justify-content-between align-items-center'>
                                                <p className='date'>{certificate.date}</p>
                                                <p className='name'>{certificate.name}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </section>
    );
}

export default Education;