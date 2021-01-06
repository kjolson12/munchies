import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import './SortBy.css';

import { connect } from 'react-redux';
import { setSortBy } from '../actions/index';

const SortBy = ({ setSortBy }) => {
    const [activeButton, setActiveButton] = useState('');
    
    const renderActiveButton = button => {
        if (button === activeButton) {
            return 'activeButton';
        }
    }

    return (
        <div className='btnGroup'>
            <Button.Group color='black'>
                <Button
                    onClick={() => {
                        setSortBy('best_match');
                        setActiveButton('best_match');
                    }}
                    id={renderActiveButton('best_match')}
                >
                    Best Match
                </Button>
                <Button
                    onClick={() => {
                        setSortBy('review_count');
                        setActiveButton('review_count');
                    }}
                    id={renderActiveButton('review_count')}
                >
                    Most Reviewed
                </Button>
                <Button
                    onClick={() => {
                        setSortBy('rating');
                        setActiveButton('rating');
                    }}
                    id={renderActiveButton('rating')}
                >
                    Highest Rated
                </Button>
            </Button.Group>
        </div>
    );
};

export default connect(null, { setSortBy })(SortBy);