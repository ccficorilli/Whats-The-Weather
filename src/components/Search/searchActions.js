import axios from 'axios';

export function updateSearchValue(searchedFor){
    return {
        type: 'UPDATE_SEARCH_VALUE',
        payload: { searchedFor }
    }
}

export function updateWeatherData(city, color){
//change background for history
    const toggle = (color) => {if(color === 'light'){
        return 'dark';
        } else return 'light';
    }
    const background = toggle(color);

//retrieve api data with axios call
    const weather = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&unit=imperial&APPID=873a0b312b072437b40ec2cdce2a1b1c`)
        .then(res => { 
            const now = new Date();
            const date = now.toDateString().slice(4,15);
            const time = now.toTimeString().slice(0,8);
            console.log(weather, date, time);
            return {
                    data: res.data,
                    history: {
                        city: res.data.name,
                        date,
                        time,
                        color: background
                        }
                    }
                })
        .catch(err => console.log(err));
    return {
        type: 'RETRIEVE_API_DATA',
        payload: { weather, background }
    }
}


