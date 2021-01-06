import React from 'react';
import { Loader, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Business from '../business/Business';

const Businesses = ({ businesses }) => {
    const renderBusinesses = () => {
        if (businesses.length === 0) {
            return <Loader inverted inline active size='huge'>Loading</Loader>
        } else return businesses.map(business => <Business business={business} key={business.id} />)
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