import React, { useState, useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

import "./Search.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkTheme } = useContext(ThemeContext);

  // Called each time user types in search input
  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    // If search field is blank, call fetchData with no args to trigger "all" API request
    // if (!value) fetchData(); // TODO - extract function to context file
    // Else call fetch data to filter by name/{name} of country
    // else fetchData("name", value);
  }

  return (
    <div className={`search ${isDarkTheme ? "dark" : ""}`}>
      <input
        className="search__input"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search for a country..." />
      <ion-icon name="search"></ion-icon>
    </div>
  );
}

export default Search;