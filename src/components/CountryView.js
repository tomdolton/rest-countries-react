import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext";
import { CountriesContext } from "../contexts/CountriesContext";
import { filterCountryByName, getBorderCountryName } from "../api-utils";
import Loading from "./Loading";
import "./CountryView.scss";


const CountryView = ({ match }) => {

  const { allCountryData, isLoading, shownCountry, setShownCountry } = useContext(CountriesContext);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Sets the displayed country data
    setShownCountry(filterCountryByName(allCountryData, match.params.name));
    // Called when /country is changed, or when API data is loaded
  }, [match.params.name, allCountryData, setShownCountry]);


  // Parses languages/currencies data in api object into comma seperated string
  const getListedData = (country, attribute) => {
    // Access languages/currencies array in the country object
    const items = country[attribute];
    // For each item in this array, return the "name" property to a var joined to a string
    return items.map(item => item.name).join(", ");
  }


  return (
    <div className={`country-view ${isDarkTheme && "dark"}`}>
      {isLoading
        ? <Loading />
        : <div className="country-view__container">
          <Link className="country-view__back-btn" to="/">
            <ion-icon name="arrow-back" ></ion-icon>
            <span>Back</span>
          </Link>

          <div className="country-view__content">

            <img className="country-view__flag" src={shownCountry.flag} alt={"Flag of " + shownCountry.name} />

            <div className="country-view__textbox">
              <h2 className="country-view__title">{shownCountry.name}</h2>
              <ul className="country-view__list">
                <li><strong>Native name:</strong> {shownCountry.nativeName}</li>
                <li><strong>Population:</strong> {shownCountry.population.toLocaleString()}</li>
                <li><strong>Region:</strong> {shownCountry.region}</li>
                <li><strong>Sub Region:</strong> {shownCountry.subregion}</li>
                <li><strong>Capital:</strong> {shownCountry.capital}</li>
              </ul>
              <ul className="country-view__list">
                <li><strong>Top Level Domain:</strong> {shownCountry.topLevelDomain}</li>
                <li><strong>Currencies:</strong> {getListedData(shownCountry, "currencies")}</li>
                <li><strong>Languages:</strong> {getListedData(shownCountry, "languages")}</li>
              </ul>
              <div className="country-view__borders">
                {shownCountry.borders.length > 0 && <h3 className="borders__title">Border Countries:</h3>}
                <ul className="borders__list">
                  {shownCountry.borders.map(country => {
                    const countryName = getBorderCountryName(allCountryData, country)
                    return <Link to={`/${countryName}`}><li>{countryName}</li></Link>
                  })}
                </ul>
              </div>
            </div>

          </div>

        </div>
      }
    </div>
  );
}

export default CountryView; 