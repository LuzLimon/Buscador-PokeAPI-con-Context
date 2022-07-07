import React from 'react';
import NavItem from '../NavItem/NavItem';
import { viewsEnum } from '../../utils/constants';
import './Header.css';


const items = [
  { title: 'Pokemones', id: viewsEnum.POKEMONES },
  { title: 'Buscador', id: viewsEnum.BUSCADOR },
];

const Header = (props) => {
  const handleNavigation = (newView) => () => {
    if (newView !== props.view) {
      props.onNav(newView);
    }
  };

  return (
    <header className="Header">

      {items.map(item => (
        <NavItem
          key={item.title}
          selected={props.view === item.id}
          onNav={handleNavigation(item.id)}
          title={item.title}
        />
      ))}
    </header>
  );
};

export default Header;