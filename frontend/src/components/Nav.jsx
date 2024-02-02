import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"}`}>
      <ul className="navbar_links">
        <li className="navbar_item slide_in_down_1">
          <Link
            to="/accueil"
            className="navbar_link link_accueil"
            onClick={handleShowLinks}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar_item slide_in_down_2">
          <Link
            to="/inscription"
            className="navbar_link link_inscription"
            onClick={handleShowLinks}
          >
            Inscription
          </Link>
        </li>
        <li className="navbar_item slide_in_down_3">
          <Link
            to="/generer"
            className="navbar_link link_generer"
            onClick={handleShowLinks}
          >
            Générer
          </Link>
        </li>
        <li className="navbar_item slide_in_down_4">
          <Link
            to="/informations"
            className="navbar_link link_information"
            onClick={handleShowLinks}
          >
            Informations
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger"
        type="button"
        onClick={handleShowLinks}
        aria-label="Toggle Navigation"
      >
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Nav;
