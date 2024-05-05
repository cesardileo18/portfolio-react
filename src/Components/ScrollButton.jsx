import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown,faArrowAltCircleUp,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import "../Scss/ScrollButton.scss"
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Si el usuario ha hecho scroll hacia abajo más de 200 píxeles, muestra el botón de subir
      if (scrollTop > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scrollButton">
      {showButton ? (
        <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollToTop} />
      ) : (
        <FontAwesomeIcon icon={faArrowAltCircleDown} onClick={scrollToBottom} />
      )}
    </div>
  );
};

export default ScrollButton;
