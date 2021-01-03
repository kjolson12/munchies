import React from 'react';

import './App.css';

import Banner from './Banner';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Businesses from './businesses/Businesses';

const App = () => {
    return (
        <div className='app'>
            <Banner />
            <div id='buttonsAndSearchBar'>
                <SortBy />
                <SearchBar />
            </div>
            <Businesses />
        </div>
    );
};

export default App;