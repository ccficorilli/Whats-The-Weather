import React from 'react';

export default class History extends React.Component {
  constructor(props){
    super(props)

  }
  

  render() {  
  // const historyMapper = (arr) => {
  //     arr.map((history, ndx) => { 
  //       return (
  //         <div className={`history-row ${history.color}`} key={ndx}>
  //           <div className='prev-city'>{history.city}</div>
  //           <div className='date-searched'>
  //             <div className='date'>{history.date}</div>
  //             <div className='time'>{history.time}</div>
  //           </div>
  //         </div>
  //       )}  
  //     ) 
      
  //   } 
    return (
      <div className='history-container'>
        <div className='label'>Search History</div>
        {/* *******************this is where the rows will be mapped */}
        {this.props.history.map((history, ndx) => (
          <div className={`history-row ${history.color}`} key={ndx}>
            <div className='prev-city'>{history.city}</div>
            <div className='date-searched'>
              <div className='date'>{history.date}</div>
              <div className='time'>{history.time}</div>
            </div>
          </div>
          )
        )}
      </div>
    );
  }

}

