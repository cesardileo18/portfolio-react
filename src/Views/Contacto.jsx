import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Spinner from '../Components/Spinner';
import '../Css/contacto.css';
import ScrollButton from '../Components/ScrollButton';

const Contacto = () => {
    const [formularioVisible, setFormularioVisible] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    const [alertMessage, setAlertMessage] = useState('');
    const [responseMenssage, setResponseMenssage] = useState();


    const toggleFormulario = () => {
        setFormularioVisible(!formularioVisible);
        setPressed(!pressed);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setShowSpinner(true)
            const response = await fetch('https://backend-portfolio-c30x.onrender.com/api/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ remitente: email, asunto: subject, mensaje: message }),
            });
            if (response.ok) {
                setResponseMenssage(response)
                setShowSpinner(false)
                // El estado 200 indica que la respuesta es exitosa
                setEmail('');
                setSubject('');
                setMessage('');
                setAlertMessage('Mensaje enviado correctamente');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000); // 3000 milisegundos (3 segundos)
            } else {
                setShowSpinner(false)
                setEmail('');
                setSubject('');
                setMessage('');
                setAlertMessage('Hubo un error al enviar el correo');
                setShowAlert(true);
            }
        } catch (error) {
            setShowSpinner(false)
            setEmail('');
            setSubject('');
            setMessage('');
            setAlertMessage('Hubo un error al enviar el correo');
            setShowAlert(true);
        }
    };
    const buttonClass = `pressed ${pressed ? 'button' : 'initialBtn'}`;
    return (
        <div className='contain-contact-spinner'>
            {showSpinner ? (
                <Spinner />
            ) : (
                <div className='contain-form p-3'>
                    <h1 className='text-center'>Página de Contacto</h1>
                    <div className="cotainButton mt-5">
                        <div className='contain__iconContact'>
                            <a href="https://github.com/cesardileo18" target="_blank" rel="noopener noreferrer">
                                <button className="btn__Contact">
                                    <FontAwesomeIcon icon={faGithub} />
                                </button>
                            </a>
                        </div>
                        <div className='contain__iconContact'>
                            <a href="https://www.linkedin.com/in/cesar-orlando-acacio-di-leonardo-12b01a1b5" target="_blank" rel="noopener noreferrer">
                                <button className="btn__Contact">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </button>
                            </a>
                        </div>
                        <div className='contain__iconContact'>
                            <button className={buttonClass} onClick={toggleFormulario}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </div>
                    {showAlert && (
                        <div className={`${responseMenssage?.status === 200 ? "alert" : "error-alert"}`}>
                            <p>{alertMessage}</p>
                            <button onClick={() => setShowAlert(false)} className="close-button mx-2">
                                X
                            </button>
                        </div>
                    )}
                    {formularioVisible ? (
                        <div className='contain__form__contact'>
                            <div className='form mt-4'>
                                <h2 className='mt-3 text-center'>Enviar Correo Electrónico</h2>
                                <form className='form-control mt-3' onSubmit={handleSubmit}>
                                    <label className='form-label'>Correo Electrónico:</label>
                                    <div className='input-group'>
                                        <span className="input-group-text" id="basic-addon1">
                                            <FontAwesomeIcon icon={faAt} />
                                        </span>
                                        <input type="email" className='form-control' name="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="basic-addon1" required />
                                    </div>
                                    <label className='form-label'>Asunto:</label>
                                    <div className='input-group'>
                                        <span className="input-group-text" id="basic-addon2">
                                            <FontAwesomeIcon icon={faComment} />
                                        </span>
                                        <input type="text" className='form-control' name={subject} value={subject} onChange={(e) => setSubject(e.target.value)} aria-describedby="basic-addon2" required />
                                    </div>
                                    <label className='form-label'>Mensaje:</label>
                                    <textarea value={message} className='form-control' name={message} onChange={(e) => setMessage(e.target.value)} required />
                                    <div className='containBtn-submitEmail d-flex justify-content-center'>
                                        <button type="submit" className='btn btn-secondary my-3'>Enviar Correo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className='agradecimiento mt-5 p-3'>
                            {/* <p>¡Gracias por visitar mi página! Si deseas contactarme, puedes encontrarme en LinkedIn o hacerlo a través del formulario de correo electrónico. También puedes explorar mis proyectos y metodología de trabajo en mi <a href="https://github.com/tu-usuario-github">repositorio de GitHub</a>.</p> */}
                            <h4>Gracias por visitar mi página! Si deseas contactarme, puedes encontrarme en LinkedIn o hacerlo a través del formulario de correo electrónico. También puedes explorar mis proyectos y metodología de trabajo en mi repositorio de GitHub.</h4>
                        </div>
                    )}
                </div>
            )}
            <ScrollButton />
        </div>
    );
}

export default Contacto;