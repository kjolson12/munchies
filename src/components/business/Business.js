import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Header, Rating } from 'semantic-ui-react';

import './Business.css';

const Business = ({ business }) => {
    return (
        <div id='businessContainer'>
            <Link to='/business'>
                <Image id='imageSize' src={business.image_url} centered rounded />
                <Header textAlign='left' size='large' id='businessHeader'>{business.name}</Header>
                <Grid columns={2} textAlign='left'>
                    <Grid.Column id='businessAddress'>
                        <p>{business.location.address1}</p>
                        <p>{business.location.city}</p>
                        <p>{business.location.state} {business.location.zip_code}</p>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Header
                            as='h3'
                            id='categoryHeader'
                        >
                            {business.categories[0].title}
                        </Header>
                        <Rating icon='star' rating={business.rating} maxRating={5} />
                        <p id='reviewCount'>{business.review_count} reviews</p>
                    </Grid.Column>
                </Grid>
            </Link>
        </div>
    );
};

export default Business;