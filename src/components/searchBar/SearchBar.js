import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

import './SearchBar.css';

import { connect } from 'react-redux';
import { setSearchTerm, setSearchLocation, fetchBusinesses } from '../../actions';

const SearchBar = (
    {
        searchTerm,
        searchLocation,
        sortBy, setSearchTerm,
        setSearchLocation,
        fetchBusinesses,
        setHasSearched
    }) => {
    const handleSearch = e => {
        e.preventDefault();

        setHasSearched(true);

        fetchBusinesses(searchTerm, searchLocation, sortBy);
    };

    return (
        <Container textAlign='center' id='formAndButtonContainer'>
            <Form onSubmit={handleSearch}>
                <Form.Group>
                    <Form.Input
                        width={8}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder='What are you hungry for?'
                    />
                    <Form.Input
                        width={8}
                        onChange={e => setSearchLocation(e.target.value)}
                        placeholder='Where are you looking?'
                    />
                </Form.Group>
            </Form>
            <Button onClick={handleSearch} id='submitButton'>
                Search
            </Button>
        </Container>
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