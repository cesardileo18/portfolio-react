import {createRoot} from "react-dom/client"
import App from "./src/App"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const root = createRoot(document.getElementById('app'))
root.render(<App/>)