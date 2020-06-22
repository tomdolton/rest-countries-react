import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext.js";
import "./Header.scss";


const Header = () => {

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`header ${isDarkTheme ? "dark" : ""}`}>
      <div className="header__container">
        <h1 className="header__title">Where in the world?</h1>
        <button className="theme-btn" onClick={toggleTheme}>
          {isDarkTheme
            ? <ion-icon name="moon"></ion-icon>
            : <ion-icon name="moon"></ion-icon>
          }
        Dark Mode
      </button>
      </div>
    </div>
  );
}

export default Header;