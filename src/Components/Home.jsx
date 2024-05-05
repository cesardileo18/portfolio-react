import React from 'react'
import "../Scss/Home.scss"
import code from "../assets/code.png"
import { useTranslation } from 'react-i18next'
const Home = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <section id='Inicio'>
      <div className='inicio__img__background'>
        <div className='inicio--contenedor d-flex align-items-center justify-content-evenly'>
          <div className='inicio__img'></div>
          <div className='inicio--contenedor--titulo'>
            <p className='inicio--titulo'>{t("home.title")}<strong><span className='inicio--text--nombre'> {t("home.name")}</span></strong><br />
              <img src={code} alt="Code" className='code' /> <strong>{t("home.subTitle")}</strong> <img src={code} alt="Code" className='code' />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;