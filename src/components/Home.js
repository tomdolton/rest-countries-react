import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import ControlBar from './ControlBar';
import CountryList from './CountryList';
import "../Home.scss";


const Home = () => {

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`home ${isDarkTheme ? "dark" : ""}`}>
      <div className="home__container">
        <ControlBar />
        <CountryList />
      </div>
    </div>
  );
}

export default Home;