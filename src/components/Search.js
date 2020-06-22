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
      <ion-icon name="search"></ion-icon>
    </div>
  );
}

export default Search;