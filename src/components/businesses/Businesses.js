import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Business from '../business/Business';

const Businesses = ({ businesses }) => {

    return (
        <Grid centered>
            {businesses.map(business => <Business business={business} key={business.id} />)}
        </Grid>
    );
};

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Businesses);