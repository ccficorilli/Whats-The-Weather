import axios from 'axios';


export function updateSearchValue(searchedFor){
    return {
        type: 'UPDATE_SEARCH_VALUE',
        payload: { searchedFor }
    }
}

export function updateWeatherData(city, color){
    const apiKey = '873a0b312b072437b40ec2cdce2a1b1c'
    //change background for history
    const toggle = (color) => {if(color === 'light'){
        return 'dark';
        } else return 'light';
    }
    const background = toggle(color);

//create day and time for history
    // const now = new Date();
    const date = new Date().toDateString().slice(4,15);
    const time = new Date().toTimeString().slice(0,8);

// Make the axios call and create the history object
    return {
        type:'RETRIEVE_API_DATA',
        payload:  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&unit=imperial&APPID=${ apiKey }`)
            .then(res => { 
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
            .catch(err => {
                console.log(err);
                alert('Sorry, that city is not valid');
            })
    }
}


