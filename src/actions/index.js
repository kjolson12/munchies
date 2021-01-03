import Yelp from '../api/Yelp';

export const fetchBusinesses = (term, location, sortBy) => async dispatch => {
    const response = await Yelp.get(`businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);

    dispatch({ type: 'FETCH_BUSINESSES', payload: response.data.businesses });
}

export const setSortBy = term => {
    return ({ type: 'SORT_BY', payload: term });
}

export const setSearchTerm = term => {
    return ({ type: 'SEARCH_TERM', payload: term });
}

export const setSearchLocation = location => {
    return ({ type: 'SEARCH_LOCATION', payload: location });
}