import React from 'react';

export default class History extends React.Component {
  constructor(props){
    super(props)

    //this.historyMapper = this.historyMapper.bind(this);
  }
  // historyMapper(arr){
  //   arr.map(history => (
  //       <div className={`history-row ${history.color}`}>
  //         <div className='prev-city'>{history.city}</div>
  //         <div className='date-searched'>
  //           <div className='date'>{history.date}</div>
  //           <div className='time'>{history.time}</div>
  //         </div>
  //       </div>
  //     ) 
  //   )
  // } 
  

  render() {
    return (
      <div className='history-container'>
        <div className='label'>Search History</div>
        {/* *******************this is where the rows will be mapped */}
          <div className={`history-row ${this.props.color}`}>
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

