import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../contexts/ThemeContext";
import { CountriesContext } from "../contexts/CountriesContext";
import Country from "./Country";
import Loading from "./Loading";
import "./CountryList.scss";

const CountryList = () => {

  const { isDarkTheme } = useContext(ThemeContext);
  const { filteredCountries, setShownCountry, isLoading } = useContext(CountriesContext);

  useEffect(() => {

  }, [filteredCountries]);

  return (
    <div className={`country__list ${isDarkTheme && "dark"}`}>
      {isLoading
        ? <Loading />
        : filteredCountries.map(country => {
          return (
            <Link
              to={`/${country.name}`}
              key={country.numericCode}
              onClick={() => {
                setShownCountry(country)
              }}>
              <Country
                key={country.numericCode}
                name={country.name}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            </Link>
          )
        })}
    </div>
  );
}

export default CountryList;