import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Weatherlist from '../containers/weather_list';

export default class App extends Component {
  render() {
    const h1Style = {
      padding: '20px 0',
      textAlign: 'center'
    };

    return (
      <div>
        <h1 style={h1Style}>React and Redux Weather App</h1>
        <SearchBar />
        <Weatherlist />
      </div>
    );
  }
}
