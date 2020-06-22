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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" /></svg>
        Dark Mode
      </button>
      </div>
    </div>
  );
}

export default Header;