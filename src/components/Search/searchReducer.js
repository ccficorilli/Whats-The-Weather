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
    case 'RETRIEVE_API_DATA_PENDING' : {
      // console.log('promise is working')
      return {
        ...state        
      };
    }
    case 'RETRIEVE_API_DATA_REJECTED' : {
      alert('Sorry, that city is not valid');
      return {
        ...state,
        searchedFor: ''
      };
    }
    case 'RETRIEVE_API_DATA_FULFILLED': {
      console.log({payload});
      return {
        ...state,
        temp: payload.data.main.temp + 'F',
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowTemp: payload.data.main.temp_min + 'F',
        highTemp: payload.data.main.temp_max + 'F',
        windSpeed: payload.data.wind.speed,
        searchedFor:'',
        city: payload.data.name,
        lat: payload.data.coord.lat + '*',
        lon: payload.data.coord.lon + '*',
        color: payload.history.color,
        icon: payload.data.weather[0].icon,
        history: [
          payload.history,
          ...state.history
          
        ]
      }; 
    }
    case 'UPDATE_SEARCH_VALUE': {
      return {
        ...state,
        searchedFor: payload.searchedFor
      };
    }

    default: {
      return state;
    };
  }
}
