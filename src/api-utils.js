// Utility functions for fetching and parsing data from rest-countries API

// Initial fetch function to get all data
export const fetchData = async () => {
  const url = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(url);
  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json();
    return data;
    // setCountries(data);
    // setIsLoading(false);
    // setIsFound(false);
  } else {
    // If no response, handle error
    // setIsFound(true);
    console.log(response.status, response.statusText);
  }
}





export const getBorderCountryName = (countries, code) => {
  const matchingCountry = countries.find(country => {
    return country.alpha3Code === code;
  })
  return matchingCountry.name;
}


export const filterCountryByName = (countries, name) => {
  const displayedCountry = countries.filter((country) => {
    return country.name === name;
  });

  return displayedCountry[0];

}