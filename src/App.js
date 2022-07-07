import React, { useState } from 'react';
import Main from './Components/Main';
import Search from './Components/Search';
import './Components/style.css'
import { viewsEnum } from './utils/constants';
import Header from './Components/Header/Header';
function App() {
  const [view, setView] = useState(viewsEnum.BUSCADOR);

  const handleNavigation = (newView) => {
    setView(newView);
  }

  let content = null;

  switch (view) {
    case viewsEnum.POKEMONES:
      content = <Main />;
      break;
    case viewsEnum.BUSCADOR:
    default:
      content = <Search />;
  }
  return (
    <div>
    <Header view={view} onNav={handleNavigation} />

    {content}
    </div>
  );
}

export default App;
