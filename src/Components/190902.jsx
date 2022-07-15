import React from 'react'
import  Navbar  from './Header/Navbar';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import perfil from '../img/Me.jpg'

const Info=()=>{
  const { i18n, t } = useTranslation();
  function changeLaguage(language) {
  i18n.changeLanguage(language);
  }

  return (
    <>
    <div>
        <Navbar/>
        <div class="ContainerBus">
        <div className="card text-center">
          <div className="card-header">
          <img src={perfil} width="200" height="200"/>
          <h3>{t("uni")}</h3>
          <p>Luz Elena Limon de la Cruz</p>
          <p>190902</p>
          </div>
        </div>
        </div>
    </div>
    </> 
 )
}
export default Info;
