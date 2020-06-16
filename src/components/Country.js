import React from 'react';
import "./Country.scss";

const Country = (props) => {

  return (
    <div className="country">
      <img className="country__flag" src={props.flag} alt="Flag" />
      <div className="country__text">
        <h2 className="country__title">{props.name}</h2>
        <p><strong>Population: </strong>{props.population}</p>
        <p><strong>Region: </strong>{props.region}</p>
        <p><strong>Captial: </strong>{props.capital}</p>
      </div>
    </div>
  );
}

export default Country;