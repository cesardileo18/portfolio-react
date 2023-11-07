import { createRoot } from "react-dom/client"
import App from "./src/App"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)