import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Business from '../business/Business';

const Businesses = ({ businesses }) => {
    const renderBusinesses = () => {
        return businesses.map(business => <Business business={business} />)
    };

    return (
        <Grid centered>
            {renderBusinesses()}
        </Grid>
    );
};

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Businesses);