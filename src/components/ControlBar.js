import React from 'react';
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./ControlBar.scss";


const ControlBar = () => {
  return (
    <div className="control-bar">
      <Search />
      <Dropdown />
    </div>
  );
}

export default ControlBar;