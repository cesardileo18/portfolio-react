import "../Css/error.css"
const Error = () => {
    return (
        <div className="contain-error">
            <h1 className="error-heading">Oops! Algo salió mal...</h1>
            <p className="error-message">Parece que has llegado a una página que no existe.</p>
            <img
                className="error-image"
                src="/img/error404/error.png" // Reemplaza con tu propia imagen
                alt="Error 404"
            />
            <p className="error-back">Vuelve a la <a href="/">página principal</a></p>
        </div>
    );
}

export default Error;