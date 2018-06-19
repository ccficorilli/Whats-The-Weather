import React from 'react';
import { updateSearchValue, updateWeatherData } from './searchActions';

class SearchComponent extends React.Component {
  constructor(props){
    super(props)

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.getWeatherOnClick = this.getWeatherOnClick.bind(this);
  };

  inputChangeHandler(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchValue(value));
  };

  getWeatherOnClick(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    const { color } = this.props;
    dispatch(updateWeatherData(value, color));
  };

  render() {
    return (
      <div className='search-container'>
        <div className='tabs-holder'>
          <div>
            <button
            type='submit'
            className='tabs' 
            value="San Diego"
            onClick={this.getWeatherOnClick}
            >San Diego</button> 
          </div>
          <div>
            <button
            type='submit'
            className='tabs' 
            value="New York"
            onClick={this.getWeatherOnClick}
            >New York</button> 
          </div>
          <div>
            <button
            type='submit'
            className='tabs' 
            value="Washington"
            onClick={this.getWeatherOnClick}
            >Washington D.C.</button> 
          </div>
          <div>
            <button
            type='submit'
            className='tabs' 
            value="London"
            onClick={this.getWeatherOnClick}
            >London</button> 
          </div>
          <div>
            <button
            type='submit'
            className='tabs' 
            value="Tokyo"
            onClick={this.getWeatherOnClick}
            >Tokyo</button> 
          </div>
        </div>
        <div className='search-bar'>
          <input
            className='search'
            type='text'
            value={this.props.searchedFor}
            onChange={this.inputChangeHandler}
            placeholder='Please enter a city here'
          />
            <button 
              type='submit'
              className='submit'
              value={this.props.searchedFor}
              onClick={this.getWeatherOnClick}
            >Search
            </button>
        </div>
      </div>
    );
  }

}
export default SearchComponent;
