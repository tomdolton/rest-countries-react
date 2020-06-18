import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext";
import "./CountryView.scss";

const CountryView = ({ match }) => {

  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const { isDarkTheme } = useContext(ThemeContext);


  useEffect(() => {
    // Sets the displayed country data
    fetchData(match.params.name);
    // Called when /country is changed
  }, [match.params.name]);

  async function fetchData(country) {
    // set the request url for the country name
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    // send request to API
    const response = await fetch(url);
    const data = await response.json();
    const dataObj = data[0];
    // parse languages and currencies properties into single arrays
    dataObj.languages = getListedData(dataObj, "languages");
    dataObj.currencies = getListedData(dataObj, "currencies");
    // Set state for country object as resultant object
    setCountry(dataObj);

    // set array to push border country names into
    const borderCountries = [];
    // store border countries array length
    const noOfBorderCountries = dataObj.borders.length;

    // For each border country code in the country data object
    await dataObj.borders.map(async code => {
      // set the request url for that country code to get that country name
      const url = `https://restcountries.eu/rest/v2/alpha/${code}?fields=name`;
      // send request to API
      const response = await fetch(url);
      const data = await response.json();
      // Add the country name to the borderCountries array
      borderCountries.push(data.name);
      // When on final border country, update the border countries state array
      if (borderCountries.length === noOfBorderCountries) setBorders(borderCountries);
    });
  }


  function getListedData(country, attribute) {
    // Access languages/currencies array in the country object
    const items = country[attribute];
    // For each item in this array, return the "name" property to a var
    // joined to a string
    return items.map(item => item.name).join(", ");
  }


  return (
    <div className={`country-view ${isDarkTheme && "dark"}`}>
      <div className="country-view__container">
        <Link className="country-view__back-btn" to="/">
          <ion-icon name="arrow-back" ></ion-icon>
          <span>Back</span>
        </Link>
        <div>
          <img className="country-view__flag" src={country.flag} alt={"Flag of " + country.name} />
          <h2 className="country-view__title">{country.name}</h2>
          <ul className="country-view__info">
            <li><strong>Native name:</strong> {country.nativeName}</li>
            <li><strong>Population:</strong> {country.population}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Sub Region:</strong> {country.subregion}</li>
            <li><strong>Capital:</strong> {country.capital}</li>
          </ul>

          <ul className="country-view__info">
            <li><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
            <li><strong>Currencies:</strong> {country.currencies}</li>
            <li><strong>Languages:</strong> {country.languages}</li>
          </ul>

          <div>
            <h3 className="borders__title">Border Countries:</h3>
          </div>
          <ul className="country-view__borders">
            {borders.map(country => <Link to={`/${country}`}><li>{country}</li></Link>)}
          </ul>
        </div>
      </div>

    </div >
  );
}

export default CountryView; 