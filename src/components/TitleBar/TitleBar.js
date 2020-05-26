import React from 'react';
import '../../index.css';
import './TitleBar.css';
import { SearchBox } from './../SearchBox/SearchBox'

function TitleBar({title}) {

  return (
    <div className="titlebar">
      <div className="titlebar-logo" data-testid="logo">
        <div className="logo" />
        logo
      </div>
      <div className="titlebar-title" data-testid="title">
        {title}
      </div>
      <SearchBox requestSearch={console.log} data-testid="search" />
    </div>
  );
  
}

export default TitleBar;
