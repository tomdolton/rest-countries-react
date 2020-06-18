import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Country from "./Country";
import "./CountryList.scss";

const CountryList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);
  const [countries, setCountries] = useState([]);




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

  return (
    <div className="country__list">
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
  );
}

export default CountryList;