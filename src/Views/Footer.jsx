import "../Css/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faLaptopCode, faBriefcase, faEnvelope, faLaptop, faCode} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {  
    const inicio= () =>{
        window.location.href = "https://www.google.com/"
    }
    return (
        <footer>
            <section className="footer">
                <div className="footer__icons" onClick={inicio}style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faHouseChimney} className="footer__icon" />
                    <p style={{fontSize:"0.5rem"}}className="footer__p">Inicio</p>
                </div>
                <div className="footer__icons"onClick={inicio}style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faCode} className="footer__icon" />
                    <p style={{fontSize:"0.5rem"}}className="footer__p">Proyectos</p>
                </div>
                <div className="footer__icons"onClick={inicio}style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faBriefcase}className="footer__icon" />
                    <p style={{fontSize:"0.5rem"}}className="footer__p">Experiencia</p> 
                </div>
                <div className="footer__icons"onClick={inicio}style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faLaptopCode}className="footer__icon" />
                    <p style={{fontSize:"0.5rem"}}className="footer__p">Habilidades</p> 
                </div>
                <div className="footer__icons"onClick={inicio}style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faEnvelope}className="footer__icon" />
                    <p style={{fontSize:"0.5rem"}}className="footer__p">Contacto</p> 
                </div>
            </section>
        </footer>
    );
}
export default Footer;