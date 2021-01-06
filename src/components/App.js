import React, { useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './App.css';

import Banner from './Banner';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Businesses from './businesses/Businesses';
import MainImage from './MainImage';

const App = ({ businesses }) => {
    const [hasSearched, setHasSearched] = useState(false);

    const determineActive = () => {
        if (hasSearched && businesses.length === 0) {
            return true
        } else return false
    };

    const renderImageOrBusinesses = () => {
        if (businesses.length !== 0) {
            return <Businesses />
        } else return (
            <Dimmer.Dimmable dimmed={determineActive()}>
                <Dimmer active={determineActive()}>
                    <Loader>Loading</Loader>
                </Dimmer>
                <MainImage />
            </Dimmer.Dimmable>
        );
    }

    return (
        <div className='app'>
            <Banner />
            <div id='buttonsAndSearchBar'>
                <SortBy />
                <SearchBar setHasSearched={setHasSearched} />
            </div>
            {renderImageOrBusinesses()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(App);