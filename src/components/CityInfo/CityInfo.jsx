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
            <div className='weather-icon'>
              <img src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`} alt="" />
            </div>
            <div className='city-name'>{weatherInfo.city}</div>
          </div>
          <div className='lat-long'>Lat: {weatherInfo.lat} / Lon: {weatherInfo.lon}</div>
        </div>
        <div className='info-display'>
          <div className='info-row'>
            <div className='info-block'>
              <div>Temperature</div>
              <div className='green'>{weatherInfo.temp}</div>
            </div>
            <div className='info-block'>
              <div>Pressure</div>
              <div className='green'>{weatherInfo.pressure}</div>
            </div>
            <div className='info-block'>
              <div>Humidity</div>
              <div className='green'>{weatherInfo.humidity}</div>
            </div>
          </div>
          <div className='info-row'>
            <div className='info-block'>
              <div>Lowest Temp</div>
              <div className='green'>{weatherInfo.lowTemp}</div>
            </div>
            <div className='info-block'>
              <div>Highest Temp</div>
              <div className='green'>{weatherInfo.highTemp}</div>
            </div>
            <div className='info-block'>
              <div>Wind Speed</div>
              <div className='green'>{weatherInfo.windSpeed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CityInfo;
