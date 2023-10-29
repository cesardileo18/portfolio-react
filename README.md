# Inicializar proyecto desde 0 usando vite
### npm create vite
Una vez hecho esto inicializa el proyecto, tienes que establecer el nombre del proyecto
luego del despliegue de proyectos escoge Vainilla. y luego despliega TypeScript y Javascript, Escojemos Javascript
# Instalar pluguin para transpilar nuestro código
npm i @vitejs/plugin-react -E , El -E es para que tenga la versión exacta
# Instalar react react-dom
npm i react react-dom -E
# Agregar archivo vite.config.js. Configurar nuestro archivo de configuración vite 
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins:[react()]
})
#### Punto de entrada de nuestra aplicación index.html, y busca el archivo main,js

# Crear archivo App.jsx
import React from "react";
const App = () => {
    return (  
        Hola mundo
    );
}
export default App;

### Cambiar configuración del main.js y cambiar el tipo de archivo a main.jsx para que pueda transpilar el código

### Configurar main.jsx
import {createRoot} from "react-dom/client"
import App from "./src/App"
const root = createRoot(document.getElementById('app'))
root.render(<App/>)

# Configurar eslinter para buen syntax de escritura 
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }


