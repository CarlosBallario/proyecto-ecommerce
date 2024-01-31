import { Link } from "react-router-dom";
import "./error.css"

const Error = () => {
  return (
    <div className="main-error">
      <div className="back-error-404">
        <h1 className="error404">ESTE PRODUCTO NO EXISTE</h1>
      </div>
      <div className="img-error">
        <img src="../../../Imagenes/404 error.png" alt="Error-404" />
      </div>
      <div className="redirection">
        <Link to="/" className="link"><h4>VOLVER A INICIO</h4></Link>
      </div>
    </div>
  );
};

export default Error;
