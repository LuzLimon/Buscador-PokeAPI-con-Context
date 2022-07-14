import React, { useState } from 'react';
import './Components/style.css'
import  Navbar  from './Components/Header/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  // const [view, setView] = useState(viewsEnum.BUSCADOR);

  // const handleNavigation = (newView) => {
  //   setView(newView);
  // }

  // let content = null;

  // switch (view) {
  //   case viewsEnum.POKEMONES:
  //     content = <Main />;
  //     break;
  //   case viewsEnum.BUSCADOR:
  //   default:
  //     content = <Search />;
  // }
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
