import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import './SortBy.css';

import { connect } from 'react-redux';
import { setSortBy, fetchBusinesses } from '../actions/index';

const SortBy = ({ setSortBy, fetchBusinesses, sortBy, searchTerm, searchLocation }) => {
    const [activeButton, setActiveButton] = useState('');
    
    const renderActiveButton = button => {
        if (button === activeButton) {
            return 'activeButton';
        };
    };

    const search = () => {
        fetchBusinesses(searchTerm, searchLocation, sortBy);
    };

    return (
        <div className='btnGroup'>
            <Button.Group color='black'>
                <Button
                    onClick={() => {
                        setSortBy('best_match');
                        setActiveButton('best_match');
                        search();
                    }}
                    id={renderActiveButton('best_match')}
                >
                    Best Match
                </Button>
                <Button
                    onClick={() => {
                        setSortBy('review_count');
                        setActiveButton('review_count');
                        search();
                    }}
                    id={renderActiveButton('review_count')}
                >
                    Most Reviewed
                </Button>
                <Button
                    onClick={() => {
                        setSortBy('rating');
                        setActiveButton('rating');
                        search();
                    }}
                    id={renderActiveButton('rating')}
                >
                    Highest Rated
                </Button>
            </Button.Group>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        sortBy: state.sortBy,
        searchTerm: state.searchTerm,
        searchLocation: state.searchLocation
    }
}

export default connect(mapStateToProps, { setSortBy, fetchBusinesses })(SortBy);