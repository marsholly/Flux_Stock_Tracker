import React, { Component } from 'react';
import CompanySearch from './CompanySearch';

export default class App extends Component{
  render(){
    return(
      <div className = 'container'>
        <h1 className="text-center">Stock Tracker</h1>
        <CompanySearch />
      </div>

    )
  }
}
