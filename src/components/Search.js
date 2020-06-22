import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { CountriesContext } from '../contexts/CountriesContext';
import "./Search.scss";


const Search = () => {

  const { isDarkTheme } = useContext(ThemeContext);
  const { allCountryData, setFilteredCountries, searchValue, setSearchValue, setFilterValue } = useContext(CountriesContext);


  function handleSearch(e) {
    const searchQuery = e.target.value.toLowerCase();
    // If search field is blank, reset filteredCountries to all
    if (!searchQuery) setFilteredCountries(allCountryData);
    // Find country names that match value, set filteredCountries to these
    const foundCountries = allCountryData.filter(country => {
      return country.name.toLowerCase().includes(searchQuery);
    });
    setFilteredCountries(foundCountries);
    setSearchValue(searchQuery);
    setFilterValue("Filter by Region");
  }


  return (
    <div className={`search ${isDarkTheme ? "dark" : ""}`}>
      <input
        className="search__input"
        onChange={handleSearch}
        value={searchValue}
        placeholder="Search for a country..." />
      <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" /></svg>
    </div>
  );
}

export default Search;