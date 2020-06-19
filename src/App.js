import React, { useEffect, useContext } from 'react';
import "./App.scss";
import { CountriesContext } from "./contexts/CountriesContext";
import { fetchData } from "./api-utils";


import Header from './components/Header.js';
import Home from './components/Home.js';
import CountryView from './components/CountryView';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const { setAllCountryData, setFilteredCountries, setIsLoading } = useContext(CountriesContext);


  // On App load
  useEffect(() => {
    // API request for all countries is sent
    (async () => {
      const data = await fetchData();
      // Resultant data is stored in CountriesContext
      setAllCountryData(data);
      setFilteredCountries(data);
      setIsLoading(false);
    })()
  }, [setAllCountryData, setFilteredCountries, setIsLoading]);




  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:name" exact component={CountryView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
