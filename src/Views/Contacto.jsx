import React, { useEffect, useState } from 'react';
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


  useEffect(() => {
    document.title = 'Portfolio-Cesar-Contacto';
  }, [])
  const toggleFormulario = () => {
    setFormularioVisible(!formularioVisible);
    setPressed(!pressed);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setShowSpinner(true);
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
        }, 3000); // 3000 milisegundos (3 segundos)
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
    }
  };
  const buttonClass = `button ${pressed ? 'pressed' : 'initialBtn'}`;
  return (
    <section className='contact-section p-3'>
      {showSpinner ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div className='contain-form p-3'>
          <header>
            <h1 className='text-center contact-title'>Página de Contacto</h1>
          </header>
          <div className='cotainButton mt-5'>
            <div className='contain__iconContact'>
              <a href='https://github.com/cesardileo18' target='_blank' rel='noopener noreferrer'>
                <button className='btn__Contact'>
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
            </div>
            <div className='contain__iconContact'>
              <a href='https://www.linkedin.com/in/cesar-acacio-di-leonardo' target='_blank' rel='noopener noreferrer'>
                <button className='btn__Contact'>
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
            <div className={`alert ${responseMenssage?.status === 200 ? 'success' : 'error'}`}>
              <p>{alertMessage}</p>
              <button onClick={() => setShowAlert(false)} className='close-button mx-2'>
                X
              </button>
            </div>
          )}
          {formularioVisible ? (
            <div className='contain__form__contact'>
              <article className='form mt-4'>
                <h2 className='mt-3 text-center'>Enviar Correo Electrónico</h2>
                <form className='form-control mt-3' onSubmit={handleSubmit}>
                  <div className="row">
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                      <label className='form-label'>Correo Electrónico:</label>
                      <div className='input-group'>
                        <span className='input-group-text'>
                          <FontAwesomeIcon icon={faAt} />
                        </span>
                        <input type='email' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                      <label className='form-label'>Asunto:</label>
                      <div className='input-group'>
                        <span className='input-group-text'>
                          <FontAwesomeIcon icon={faComment} />
                        </span>
                        <input type='text' className='form-control' name={subject} value={subject} onChange={(e) => setSubject(e.target.value)} required />
                      </div>
                    </div>
                    <label className='form-label'>Mensaje:</label>
                    <textarea value={message} className='form-control' name={message} onChange={(e) => setMessage(e.target.value)} required />
                    <div className='containBtn-submitEmail d-flex justify-content-center'>
                      <button type='submit' className='btn btn-secondary my-3'>
                        Enviar Correo
                      </button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          ) : (
            <div className='agradecimiento mt-5 p-3'>
              <h4 className='contact-description'>
                Gracias por visitar mi página! Si deseas contactarme, puedes encontrarme en LinkedIn o hacerlo a través del formulario de correo electrónico. También puedes explorar mis proyectos y metodología de trabajo en mi repositorio de GitHub.
              </h4>
            </div>
          )}
        </div>
      )}
      <ScrollButton />
    </section>
  );
};

export default Contacto;
