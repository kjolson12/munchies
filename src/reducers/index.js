import { combineReducers } from 'redux';

import businessesReducer from './businessesReducer';
import sortByReducer from './sortByReducer';
import searchTermReducer from './searchTermReducer';
import searchLocationReducer from './searchLocationReducer';

export default combineReducers({
    businesses: businessesReducer,
    sortBy: sortByReducer,
    searchTerm: searchTermReducer,
    searchLocation: searchLocationReducer
});