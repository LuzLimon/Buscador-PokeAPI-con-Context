import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import imgpoke from '../../img/Pokemon.png'


export const Navbar = () => {
    const { i18n, t } = useTranslation();
    function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
    return (
        <div>
            <div className="Header">
            <nav>
            <div className="navbar-container">
                <div class="container">
                <a class="navbar-brand" href="#">
                <img src={imgpoke} width="400" height="150"/>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to='/pokemons'>{t("pokemones")}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/buscador'>{t("buscador")}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/190902'>{t("about")}</Link>
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