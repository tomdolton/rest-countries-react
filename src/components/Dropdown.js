import React, { useState } from 'react';



const Dropdown = (props) => {

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function handleClick(e) {
    const value = e.target.innerText.toLowerCase();
    console.log(value);
    props.handleFilter(value);
  }

  return (
    <div>
      <div>Filter by Region</div>
      {regions.map(region => {
        return <button onClick={handleClick} value={region}>{region}</button>
      })}
    </div>
  );
}

export default Dropdown;