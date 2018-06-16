export function updateSearchValue(value){
    return {
        type: "UPDATE_SEARCH_VALUE",
        payload: value
    }
}

export function updateWeatherAPI(searchText){
    return {
        type: "RETRIEVE_API_DATA",
        payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ searchText }&unit=imperial&APPID=873a0b312b072437b40ec2cdce2a1b1c`)
            .then(res => res.data)
    }
}