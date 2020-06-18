import React, { useState, useEffect } from 'react';
import "./App.scss";

import ThemeProvider from "./contexts/ThemeContext";

import Header from './components/Header.js';
import Home from './components/Home.js';
import CountryView from './components/CountryView';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//----- Dark mode ----- //
// darkTheme state set to dark by default (true)
// When user clicks dark mode button
// darkTheme boolean inverts
// CSS theme file source is changed??





//----- Search input field ----- //
// When the user types in the input
// a new fetch request is sent to the API
// the URL of the request is changed to search by /name
// the end of the URL adds the users string input as the search name of the country /{name}
// https://restcountries.eu/rest/v2/name/{name}
// the state hook that sets the shown countries is updated for each response from the API

// can combine with

//----- Region filter ----- //
// When the user selects a region from the dropdown <select /> element
// a new fetch request is sent to the API
// the URL of the request is changed to search by /region
// the end of the URL adds the users string input as the search name of the country /{region}
// the state hook that sets the shown countries is updated for each response from the API




function App() {




  return (
    <Router>
      <div className="App">
        <ThemeProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:name" exact component={CountryView} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
