import React, { createContext, useState } from 'react';

export const CountriesContext = createContext();

const CountriesProvider = (props) => {

  // Stores all API data to be used in an array
  const [allCountryData, setAllCountryData] = useState([]);
  // boolean value to change display before/after api data is loaded
  const [isLoading, setIsLoading] = useState(true);
  // displayed list of countries in CountryList component
  const [filteredCountries, setFilteredCountries] = useState([]);
  // Country shown on CountryView
  const [shownCountry, setShownCountry] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("Filter by Region");


  return (
    <CountriesContext.Provider
      value={{
        allCountryData,
        setAllCountryData,
        isLoading,
        setIsLoading,
        filteredCountries,
        setFilteredCountries,
        shownCountry,
        setShownCountry,
        searchValue,
        setSearchValue,
        filterValue,
        setFilterValue

      }}>
      {props.children}
    </CountriesContext.Provider>
  );
}

export default CountriesProvider;