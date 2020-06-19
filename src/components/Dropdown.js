import React, { useState, useContext } from 'react';
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Dropdown.scss";
import { CountriesContext } from '../contexts/CountriesContext';


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
      <div className="dropdown__label" onClick={handleLabelClick}>{filterValue}</div>
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