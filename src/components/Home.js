import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import ControlBar from './ControlBar';
import CountryList from './CountryList';

// import "../App.scss";


const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${isDarkTheme ? "dark" : ""}`}>
      <ControlBar />
      <CountryList />
    </div>
  );
}

export default Home;