import React, { useState, useEffect } from 'react';
import Country from './Country';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(category, query) {
    if (!category) {
      category = "all";
      query = "";
    } else {
      category += "/";
    }
    const url = `https://restcountries.eu/rest/v2/${category}${query}?fields=name;population;region;capital;flag`;
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setIsFound(false);
    } else {
      // If no response, handle error
      setIsFound(true);
      console.log(response.status, response.statusText);
    }
  }

  // Called each time user types in search input
  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    // If search field is blank, call fetchData with no args to trigger "all" API request
    if (!value) fetchData();
    // Else call fetch data to filter by name/{name} of country
    else fetchData("name", value);
  }

  // Called each time user selects a region in the filter
  function handleFilter(region) {
    setFilterValue(region);
    // Call fetch data to filter by region/{name} of region
    fetchData("region", region);
  }


  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const switchTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div>
      <input onChange={handleSearch} value={searchQuery} />
      <Dropdown handleFilter={handleFilter} filterValue={filterValue} />
      <button onClick={switchTheme}>Dark Mode</button>
      <div className="main">
        {isLoading
          ? <div>...loading</div>
          : !isFound
          && countries.map(country => {
            return (
              <Link to={`/${country.name}`}>
                <Country
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flag} />
              </Link>
            )
          })}
      </div>
    </div>
  );
}

export default Home;