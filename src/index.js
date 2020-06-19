import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from "./contexts/ThemeContext";
import CountriesProvider from "./contexts/CountriesContext";
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <CountriesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

