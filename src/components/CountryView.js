import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"


const CountryView = ({ match }) => {

  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // set the request url for the country name
    const url = `https://restcountries.eu/rest/v2/name/${match.params.name}`;
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
    <div>
      <Link to="/"><button>Back</button></Link>
      <div>
        <img src={country.flag} alt={"Flag of " + country.name} />
        <h2>{country.name}</h2>
        <ul>
          <li><strong>Native name:</strong> {country.nativeName}</li>
          <li><strong>Population:</strong> {country.population}</li>
          <li><strong>Region:</strong> {country.region}</li>
          <li><strong>Sub Region:</strong> {country.subregion}</li>
          <li><strong>Capital:</strong> {country.capital}</li>
          <li><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
          <li><strong>Currencies:</strong> {country.currencies}</li>
          <li><strong>Languages:</strong> {country.languages}</li>
        </ul>

        <div>
          <p><strong>Borders:</strong></p>
        </div>
        <ul>
          {borders.map(item => <li>{item}</li>)}
        </ul>
      </div>

    </div>
  );
}

export default CountryView;