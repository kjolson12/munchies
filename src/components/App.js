import React, { useState } from 'react';

import './App.css';

import Banner from './Banner';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Businesses from './businesses/Businesses';
import MainImage from './MainImage';

const App = () => {
    const [hasSearched, setHasSearched] = useState(false);

    const renderGifOrBusinesses = () => {
        if (hasSearched) {
            return <Businesses />
        } else return <MainImage />;
    }

    return (
        <div className='app'>
            <Banner />
            <div id='buttonsAndSearchBar'>
                <SortBy />
                <SearchBar setHasSearched={setHasSearched} />
            </div>
            {renderGifOrBusinesses()}
        </div>
    );
};

export default App;