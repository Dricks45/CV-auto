import "../css/Generer.css";
import { Link } from "react-router-dom";
import cv from "../assets/CV-modele.svg";

function Generer() {
  return (
    <section className="container_generer">
      <h2 className="title_generer">Générer votre cv</h2>
      <div className="big_container_style">
        <Link className="container_style" to="/generer/texte">
          <h4 className="title_style">Simple</h4>
          <img className="img_style" src={cv} alt="cv" />
        </Link>
        <Link className="container_style" to="/generer/texte">
          <h4 className="title_style">Moderne</h4>
          <img className="img_style" src={cv} alt="cv" />
        </Link>
        <Link className="container_style" to="/generer/texte">
          <h4 className="title_style">Elégant</h4>
          <img className="img_style" src={cv} alt="cv" />
        </Link>
        <Link className="container_style" to="/generer/texte">
          <h4 className="title_style">Créatif</h4>
          <img className="img_style" src={cv} alt="cv" />
        </Link>
      </div>
    </section>
  );
}

export default Generer;
