import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBar/searchBarReducer';
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
// add reducers
  search: searchBarReducer,
  history: searchHistoryReducer
});

export default rootReducer;
