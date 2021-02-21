import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './App.css';

import Banner from './banner/Banner';
import SearchBar from './searchBar/SearchBar';
import SortBy from './sortBy/SortBy';
import Businesses from './businesses/Businesses';
import MainImage from './mainImage/MainImage';
import BusinessShow from './businessShow/BusinessShow';

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
            <Router>
                <Switch>
                    <Route path='/business'>
                        <BusinessShow />
                    </Route>
                    <Route path='/'>
                        {renderImageOrBusinesses()}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(App);