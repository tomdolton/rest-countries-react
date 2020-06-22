import React, { useState, useContext } from 'react';
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { CountriesContext } from '../contexts/CountriesContext';
import "./Dropdown.scss";


const Dropdown = (props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { isDarkTheme } = useContext(ThemeContext);
  const { allCountryData, setFilteredCountries, filterValue, setFilterValue } = useContext(CountriesContext);

  // Triggers dropdown menu content
  const handleLabelClick = () => setIsDropdownOpen(!isDropdownOpen);


  // Called each time user selects a region in the filter
  const handleOptionClick = (e) => {

    const region = e.target.innerText;

    setIsDropdownOpen(!isDropdownOpen)
    if (region === "All") {
      setFilteredCountries(allCountryData);
      setFilterValue("Filter by Region");
      return;
    }
    else {
      const foundCountries = allCountryData.filter(country => {
        return country.region === region;
      });
      setFilteredCountries(foundCountries);
      setFilterValue(region);
    }
  }


  return (
    <div className={`dropdown ${isDarkTheme && "dark"}`}>

      <div className="dropdown__label" onClick={handleLabelClick}>
        <span>{filterValue}</span>
        {isDropdownOpen
          ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144" /></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" /></svg>}
      </div>
      <div className="dropdown__options">
        {regions.map(region => {
          return (
            <div
              key={uuid()}
              className={`dropdown__option ${isDropdownOpen && "is-open"}`}
              onClick={handleOptionClick}
              value={region}>{region}
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default Dropdown;