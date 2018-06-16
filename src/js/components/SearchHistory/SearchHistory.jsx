import React from 'react';

class SearchHistory extends React.Component {
  constructor(props){
    this.state = {
      date:'',
      time:'',
      city:''
    }
  }

  render() {
    return (
      <div className='history-container'>
        <div className='label'>Search History</div>
          <div className='history-row dark'>
            <div className='prev-city'>last city</div>
            <div className='date-searched'>
              <div className='date'>01/01/2001</div>
              <div className='time'>05:05:55</div>
            </div>
          </div>
          <div className='history-row'>
            <div className='prev-city'>last city</div>
            <div className='date-searched'>
              <div className='date'>01/01/2001</div>
              <div className='time'>05:05:55</div>
            </div>
          </div>
          <div className='history-row dark'>
            <div className='prev-city'>last city</div>
            <div className='date-searched'>
              <div className='date'>01/01/2001</div>
              <div className='time'>05:05:55</div>
            </div>
          </div>
      </div>
    );
  }

}
export default SearchHistory;
