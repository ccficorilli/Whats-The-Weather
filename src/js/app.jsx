import React from 'react';
import Search from '../components/Search/SearchComponent';
import History from '../components/History/History';
import CityInfo from '../components/CityInfo/CityInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1 className='page-title'>Origin Weather Application</h1>
          <p className='tag-line'>Always know if you'll need an umbrella!</p>
        </div>
        <Search />
        <div className='body-container'>
          <CityInfo />
          <History />
        </div>
      </div>
    );
  }
}
