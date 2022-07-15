import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Components/Main'
import SearchS from './Components/Search';
import Info from './Components/190902';
import Fondo from './Components/ContextFondo';
import { BrowserRouter as Router, Navigate, Routes, Route} from "react-router-dom"
import i18n from "./config/localization/i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

root.render(
  <I18nextProvider i18n={i18n}>
  <Router>
      <Routes>
          <Route path='/' element={<Navigate replace to="/pokemons"/>} />
          <Route path='pokemons' element={<Main/>}/>
          <Route path='buscador' element={<SearchS/>}/>
          <Route path='190902' element={<Info/>}/>
          <Route path='diseno' element={<Fondo/>}/>
      </Routes>
    </Router>
    </I18nextProvider>
);


