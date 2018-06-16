import React from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  searchChangeHandler = (e) => {
    const { dispatch } = this.props;
    const { query } = e.target.value;
    dispatch(updateSearchValue(query));
  }

  // searchOnClick = () => {
  //   const { dispatch } = this.props;
  //   let apiData = axios.get(`api.openweathermap.org/data/2.5/weather?q=${this.props.query}&unit=imperial&APPID=873a0b312b072437b40ec2cdce2a1b1c`)
  //   .then(res => res.data).catch(err => console.log(err));
  //   const { info } = this.props.city;
  //   dispatch(updateWeatherAPI(value))
  // }

  getWeatherOnClick = (v) => {
    const { dispatch } = this.props;
    const { }
    dispatch(updateWeatherAPI(apiData))
  }

  render() {
    return (
      <div className='search-container'>
        <div className='tabs-holder'>
          <div className='tabs' value="San%20Diego">San Diego</div>
          <div className='tabs' value="New%20York">New York</div>
          <div className='tabs' value="Washington%20D%2EC%2E">Washington D.C.</div>
          <div className='tabs' value="London">London</div>
          <div className='tabs' value="Tokyo">Tokyo</div>
        </div>
        <div className='search-bar'>
          <input
            className='search'
            type='text'
            value={this.searchChangeHandler}
            placeholder='This is where the Search Bar will go'
          />
          <div className='submit'>
            <span className='button' value={this.props.query}>Search</span>
          </div>
        </div>
      </div>
    );
  }

}
export default SearchBar;
