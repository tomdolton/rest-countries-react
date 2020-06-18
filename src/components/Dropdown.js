import React, { useState, useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import "./Dropdown.scss";


const Dropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("Filter by Region");
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { isDarkTheme } = useContext(ThemeContext);

  // Called each time user selects a region in the filter
  const handleFilter = (e) => {
    const region = e.target.innerText;
    setFilterValue(region);
    setIsDropdownOpen(!isDropdownOpen)
    // Call fetch data to filter by region/{name} of region
    // fetchData("region", region); TODO - get this through context
  }

  const handleLabelClick = () => setIsDropdownOpen(!isDropdownOpen);


  return (
    <div className={`dropdown ${isDarkTheme && "dark"}`}>
      <div className="dropdown__label" onClick={handleLabelClick}>{filterValue}</div>
      <div className="dropdown__options">
        {regions.map(region => {
          return (
            <div
              className={`dropdown__option ${isDropdownOpen && "is-open"}`}
              onClick={handleFilter}
              value={region}>{region}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dropdown;