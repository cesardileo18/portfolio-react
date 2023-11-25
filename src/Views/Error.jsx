import React from 'react';
import '../Css/error.css';

const Error = () => {
  return (
    <section className="error">
      <header className="error__header">
        <h1 className="error__heading">Oops! Algo salió mal...</h1>
        <p className="error__message">Parece que has llegado a una página que no existe.</p>
      </header>
      <article className="error__content">
        <img
          className="error__image"
          src="/img/error404/error.png" 
          alt="Error 404"
        />
        <p className="error__back">
          Vuelve a la <a href="/">página principal</a>
        </p>
      </article>
    </section>
  );
};

export default Error;
