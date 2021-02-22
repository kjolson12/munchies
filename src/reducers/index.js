import { combineReducers } from 'redux';

import businessesReducer from './businessesReducer';
import businessReducer from './businessReducer';
import sortByReducer from './sortByReducer';
import searchTermReducer from './searchTermReducer';
import searchLocationReducer from './searchLocationReducer';

export default combineReducers({
    businesses: businessesReducer,
    business: businessReducer,
    sortBy: sortByReducer,
    searchTerm: searchTermReducer,
    searchLocation: searchLocationReducer
});