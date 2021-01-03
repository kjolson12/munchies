import React from 'react';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { setSortBy } from '../actions/index';

const SortBy = ({ setSortBy }) => {
    return (
        <div>
            <Button.Group>
                <Button onClick={() => setSortBy('best_match')}>Best Match</Button>
                <Button onClick={() => setSortBy('review_count')}>Most Reviewed</Button>
                <Button onClick={() => setSortBy('rating')}>Highest Rated</Button>
            </Button.Group>
        </div>
    );
};

export default connect(null, { setSortBy })(SortBy);