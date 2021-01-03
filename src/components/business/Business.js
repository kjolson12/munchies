import React from 'react';
import { Grid, Image, Header, Rating } from 'semantic-ui-react';

import './Business.css';

const Business = ({ business }) => {
    return (
        <div>
            <Image src={business.image_url} size='medium' />
            <Header id='businessHeader'>{business.name}</Header>
            <Grid columns={2}>
                <Grid.Column>
                    <p>{business.location.address1}</p>
                    <p>{business.location.city}</p>
                    <p>{business.location.state} {business.location.zip_code}</p>
                </Grid.Column>
                <Grid.Column>
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
        </div>
    );
};

export default Business;