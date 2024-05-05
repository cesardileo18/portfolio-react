import "../Scss/Contact.scss"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Spinner from "./Spinner"
const Contact = () => {
    const [t, i18n] = useTranslation("global")
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertEmail, setShowAlertEmail] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [responseMenssage, setResponseMenssage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Marcamos que se está enviando el formulario
        setShowSpinner(true);

        isValidEmail(email)
        if (!isValidEmail(email)) {
            setShowSpinner(false);
            setAlertMessage('El correo electrónico no es válido');
            setShowAlertEmail(true);
            setIsSubmitting(false); // Importante: debes reiniciar el estado de isSubmitting aquí
            return; // Detener el flujo de ejecución del envío del formulario
        }
        try {
            const response = await fetch('https://backend-portfolio-c30x.onrender.com/api/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ remitente: email, asunto: subject, mensaje: message }),
            });

            if (response.ok) {
                setResponseMenssage(response);
                setShowSpinner(false);
                setEmail('');
                setSubject('');
                setMessage('');
                setAlertMessage('Mensaje enviado correctamente');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000);
            } else {
                setShowSpinner(false);
                setEmail('');
                setSubject('');
                setMessage('');
                setAlertMessage('Hubo un error al enviar el correo');
                setShowAlert(true);
            }
        } catch (error) {
            setShowSpinner(false);
            setEmail('');
            setSubject('');
            setMessage('');
            setAlertMessage('Hubo un error al enviar el correo');
            setShowAlert(true);
        } finally {
            setIsSubmitting(false); // Se ha recibido la respuesta, no se está enviando más
        }
    };

    const desibleButon = () => {
        if (email === "" || subject === "" || message === "") {
            return true;
        } else {
            return false;
        }
    }
    const isValidEmail = (email) => {
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailRegex = /^(?=.*[@])(?=.*\.(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|cat|jobs|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$)(?=.*@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|aol\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com|icloud\.com|yandex\.com|tutanota\.com|mail\.ru|fastmail\.com|posteo\.de|openmailbox\.org|runbox\.com|mailfence\.com|disroot\.org|startmail\.com|hushmail\.com))\S+@\S+\.\S+$/i;
        return emailRegex.test(email);
    }
    return (
        <section id="Contacto" className="p-3">
            <div className="d-flex justify-content-center mt-2 mb-2">
                <h1>{t("contact.title")}</h1>
            </div>
            {showAlert && (
                <div className={`${responseMenssage && responseMenssage.status !== 200 ? 'error-alert' : 'alert'}`}>
                    <p>{alertMessage}</p>
                    <button onClick={() => setShowAlert(false)} className='close-button mx-2'>
                        X
                    </button>
                </div>
            )}
            {
                showAlertEmail &&
                <div className={`${!isValidEmail(email) && 'error-alert'}`}>
                    <p>{alertMessage}</p>
                    <button onClick={() => setShowAlertEmail(false)} className='close-button mx-2'>
                        X
                    </button>
                </div>
            }
            <div className="contendor--contacto d-flex">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-2">
                        <p className="mb-2">{t("contact.description")}</p>
                        <div className='cotainButton mt-2 mb-2 d-flex gap-2'>
                            <div className='containerIconGithub d-flex justify-content-center align-items-center'>
                                <a href='https://github.com/cesardileo18' target='_blank' rel='noopener noreferrer'>
                                    <button className='btn__icons'>
                                        <FontAwesomeIcon icon={faGithub} className="iconGithub" />
                                    </button>
                                </a>
                            </div>
                            <div className='containerIconLinkedinIn d-flex justify-content-center align-items-center'>
                                <a href='https://www.linkedin.com/in/cesar-acacio-di-leonardo' target='_blank' rel='noopener noreferrer'>
                                    <button className='btn__icons'>
                                        <FontAwesomeIcon icon={faLinkedinIn} className="iconLinkedinIn" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        {showSpinner ? (
                            <div className="d-flex justify-content-center align-items-center spinner">
                                <Spinner />
                            </div>
                        )
                            : (
                                <div className="contenedor--contact d-flex justify-content-center align-items-center p-3">
                                    <form className='form-control p-3' onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className='col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <label className='form-label'>{t("contact.correo")}</label>
                                                <div className='input-group'>
                                                    <span className='input-group-text'>
                                                        <FontAwesomeIcon icon={faAt} />
                                                    </span>
                                                    <input type='email' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <label className='form-label'>{t("contact.asunto")}</label>
                                                <div className='input-group'>
                                                    <span className='input-group-text'>
                                                        <FontAwesomeIcon icon={faComment} />
                                                    </span>
                                                    <input type='text' className='form-control' name={subject} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <label className='form-label'>{t("contact.mensaje")}</label>
                                                <textarea value={message} className='form-control' name={message} onChange={(e) => setMessage(e.target.value)} />
                                            </div>
                                            <div className='containBtn-submitEmail d-flex justify-content-center'>
                                                <button type='submit' className='btn btn-secondary form_submit my-3' disabled={isSubmitting || desibleButon()}>
                                                    {t("contact.btn")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <div className='relleno--contacto'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique dolor libero explicabo perferendis exercitationem provident sequi, nulla quas iure quaerat nobis ad porro ut dolore veritatis nihil voluptate. Perspiciatis!Lorem</p>
            </div>
        </section>
    );
}

export default Contact;