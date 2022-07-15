import React from 'react'
import  Navbar  from './Header/Navbar';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Info=()=>{
  const { i18n, t } = useTranslation();
  function changeLaguage(language) {
  i18n.changeLanguage(language);
  }

  return (
    <>
    <div className='about'>
        <Navbar/>
           <h1>{t("uni")}</h1>
           <h1>Luz Elena Limon de la Cruz</h1>
           <h1>190902</h1>
    </div>
    </> 
 )
}
export default Info;
