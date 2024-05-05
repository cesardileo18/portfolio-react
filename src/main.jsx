import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next'
import global_es from "./translatios/es/global.json"
import global_en from "./translatios/en/global.json"
import global_it from "./translatios/it/global.json"
// Verificar si hay un idioma almacenado en el localStorage
const storedLanguage = localStorage.getItem('language');

// Establecer el idioma predeterminado en español si no hay ningún idioma almacenado
const defaultLanguage = storedLanguage || "es";
i18next.init({
  interpolation: { escapeValue: false },
  lng:defaultLanguage,
  resources:{
    es:{
      global:global_es
    },
    en:{
      global:global_en
    },
    it:{
      global:global_it
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  ,
)
