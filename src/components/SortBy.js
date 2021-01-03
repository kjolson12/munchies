import React from 'react';
import { Button } from 'semantic-ui-react';

import './SortBy.css';

import { connect } from 'react-redux';
import { setSortBy } from '../actions/index';

const SortBy = ({ setSortBy }) => {
    return (
        <div className='btnGroup'>
            <Button.Group toggle color='black'>
                <Button id='btnInGroup' onClick={() => setSortBy('best_match')}>Best Match</Button>
                <Button id='btnInGroup' onClick={() => setSortBy('review_count')}>Most Reviewed</Button>
                <Button id='btnInGroup' onClick={() => setSortBy('rating')}>Highest Rated</Button>
            </Button.Group>
        </div>
    );
};

export default connect(null, { setSortBy })(SortBy);