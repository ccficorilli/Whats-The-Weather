import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchHistory from './components/SearchHistory/SearchHistory';
import CityInfo from './components/CityInfo/CityInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1 className='page-title'>Origin Weather Application</h1>
          <p className='tag-line'>Always know if you'll need an umbrella!</p>
        </div>
        <SearchBar />
        <div className="body-container">
          <CityInfo />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
