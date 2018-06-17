const defaultState = {
  temp: '',
  pressure: '',
  humidity: '',
  lowTemp: '',
  highTemp: '',
  windSpeed: '',
  searchedFor:'',
  city: '',
  lat: '',
  lon: '',
  color: 'light',
  icon: '',
  history: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'UPDATE_SEARCH_VALUE': {
      return {
        ...state,
        searchedFor: payload.searchedFor
      }
    }
    case 'RETRIEVE_API_DATA': {
      return {
        ...state,
        temp: payload.weather.data.main.temp,
        pressure: payload.weather.data.main.pressure,
        humidity: payload.weather.data.main.humidity,
        lowTemp: payload.weather.data.main.temp_min,
        highTemp: payload.weather.data.main.temp_max,
        windSpeed: payload.weather.data.wind.speed,
        searchedFor:'',
        city: payload.weather.data.name,
        lat: payload.weather.data.coord.lat,
        lon: payload.weather.data.coord.lon,
        color: payload.background,
        icon: payload.weather.data.weather[0].icon,
        history: [
          ...state.history,
          payload.weather.history
        ]
      }  
    }
    default: {
      return state;
    }
  }
}
