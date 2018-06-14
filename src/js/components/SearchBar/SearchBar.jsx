import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className='search-container'>
        <div className='tabs-holder'>
          <div className='tabs'>San Diego</div>
          <div className='tabs'>New York</div>
          <div className='tabs'>Washington D.C.</div>
          <div className='tabs'>London</div>
          <div className='tabs'>Tokyo</div>
        </div>
        <div className='search-bar'>
          <input
            className='search'
            type='text'
                // value=""
            placeholder='This is where the Search Bar will go'
          />
          <div className='submit'>
            <span className='button'>Search</span>
          </div>
        </div>
      </div>
    );
  }

}
export default SearchBar;
