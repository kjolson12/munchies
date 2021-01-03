import React from 'react';
import { Input, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { setSearchTerm, setSearchLocation, fetchBusinesses } from '../actions';

const SearchBar = ({ searchTerm, searchLocation, sortBy, setSearchTerm, setSearchLocation, fetchBusinesses }) => {
    const handleSearch = e => {
        e.preventDefault();

        fetchBusinesses(searchTerm, searchLocation, sortBy);
    };

    return (
        <div>
            <Input
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='What are you hungry for?'
            />
            <Input
                onChange={e => setSearchLocation(e.target.value)}
                placeholder='Where are you looking?'
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        sortBy: state.sortBy,
        searchLocation: state.searchLocation
    }
}

export default connect(
    mapStateToProps,
    {
        setSearchTerm,
        setSearchLocation,
        fetchBusinesses
    }
)(SearchBar);