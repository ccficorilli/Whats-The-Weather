import React from 'react';

class CityInfo extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const weatherInfo = this.props;
    return (
      <div className='city-container'>
        <div className='label'>City Information</div>
        <div className='city-display'>
          <div className='city-row'>
            <div className='weather-icon'>{weatherInfo.icon}</div>
            <div className='city-name'>{weatherInfo.city}</div>
          </div>
          <div className='lat-long'>{weatherInfo.lat}/{weatherInfo.lon}</div>
        </div>
        <div className='info-display'>
          <div className='info-row'>
            <div className='info-block'>
              <div>Temperature</div>
              <div>{weatherInfo.temp}</div>
            </div>
            <div className='info-block'>
              <div>Pressure</div>
              <div>{weatherInfo.pressure}</div>
            </div>
            <div className='info-block'>
              <div>Humidity</div>
              <div>{weatherInfo.humidity}</div>
            </div>
          </div>
          <div className='info-row'>
            <div className='info-block'>
              <div>Lowest Temp</div>
              <div>{weatherInfo.lowTemp}</div>
            </div>
            <div className='info-block'>
              <div>Highest Temp</div>
              <div>{weatherInfo.highTemp}</div>
            </div>
            <div className='info-block'>
              <div>Wind Speed</div>
              <div>{weatherInfo.windSpeed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CityInfo;
