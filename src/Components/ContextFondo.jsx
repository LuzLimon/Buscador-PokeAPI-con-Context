import React, { Component, useContext, useState } from "react";
import Navbar from "./Header/Navbar";
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

export const themes = {
  light: {
    color: "#555555",
    background: "#eeeeee"
  },
  dark: {
    color: "#eeeeee",
    background: "#222222"
  },
  vaporwave: {
    color: "#ffffff",
    background: "#ff71ce"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  updateTheme: () => {}
});

class MyButton extends Component {
  render() {
    
    const { theme, updateTheme } = this.context;
    const style = {
      backgroundColor: theme.background,
      color: theme.color,
      border: "1px solid",
      borderRadius: 5
    };

    const updateLightTheme = () => {
      updateTheme(themes.light);
    };

    const onClick = this.props.handleClick || updateLightTheme;

    return <button onClick={onClick} style={style} {...this.props} />;
    
  }
}

MyButton.contextType = ThemeContext;


export default function Fond() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const { i18n, t } = useTranslation();
    function changeLaguage(language) {
    i18n.changeLanguage(language);
    }
  return (
    <div>
      <Navbar/>
    <div className="ContainerBus">
    <div className="card text-center">
     <div className="card-header">
      <h1>{t("contexttitle")}</h1>
      <ThemeContext.Provider
        value={{ theme: currentTheme, updateTheme: setCurrentTheme }}
      >
        <MyButton onClick={() => setCurrentTheme(themes.dark)}>
        {t("dark")}
        </MyButton>

        <MyButton onClick={() => setCurrentTheme(themes.vaporwave)}>
        {t("pink")}
        </MyButton>

        <MyButton>{t("Light")}</MyButton>
        <hr />
      </ThemeContext.Provider>
    </div>
    </div>
    </div>
    </div>
  );
}
