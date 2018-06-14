import React from 'react';

class CityInfo extends React.Component {

  render() {
    return (
      <div className='city-container'>
        <div className='label'>City Information</div>
        <div className='city-display'>
          <div className='city-row'>
            <div className='weather-icon'>icon here</div>
            <div className='city-name'>City Name Here</div>
          </div>
          <div className='lat-long'>Lat/Long:</div>
        </div>
        <div className='info-display'>
          <div className='info-row'>
            <div className='info-block'>
              <div>Temperature</div>
              <div>display</div>
            </div>
            <div className='info-block'>
              <div>Pressure</div>
              <div>display</div>
            </div>
            <div className='info-block'>
              <div>Humidity</div>
              <div>display</div>
            </div>
          </div>
          <div className='info-row'>
            <div className='info-block'>
              <div>Lowest Temp</div>
              <div>display</div>
            </div>
            <div className='info-block'>
              <div>Highest Temp</div>
              <div>display</div>
            </div>
            <div className='info-block'>
              <div>Wind Speed</div>
              <div>display</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CityInfo;
