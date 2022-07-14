import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';


export const Navbar = () => {
    const { i18n, t } = useTranslation();
    function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
    return (
        <div>
            <div className="Header">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">PokeApi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to='/pokemones'>{t("pokemones")}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/buscador'>{t("buscador")}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/190902'>About</Link>
                    </li>
                </ul>
                </div>
                <button onClick={()=> 
                    { changeLanguage("en") }}>
                        en
                </button>
                <button onClick={()=> 
                    { changeLanguage("es") }}>
                        es
                </button>
            </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar;