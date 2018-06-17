import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowTemp: store.search.lowTemp,
    highTemp: store.search.highTemp,
    windSpeed: store.search.windSpeed,
    city: store.search.city,
    lon: store.search.lon,
    lat: store.search.lat,
    icon: store.search.icon

  
  };
}

export default connect(mapStoreToProps)(CityInfo);