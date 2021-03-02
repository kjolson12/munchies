import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Header, Image, Rating } from 'semantic-ui-react';

import { connect } from 'react-redux';

import './BusinessShow.css';

const BusinessShow = ({ business }) => {
    // not sure why it only loops over the first photo
    //
    // const renderImages = () => {
    //     for (const photo of business.photos) {
    //         console.log(business.photos);
    //         console.log(photo);
    //         return <Image src={photo} />
    //     }
    // }

    const renderLoad = () => {
        if (!business.photos) {
            return <div>Loading...</div>
        } else {
            return (
                <Grid id='businessContainer'>
                    <Grid.Column width='8' textAlign='left'>
                        <Header size='large' id='businessHeader'>{business.name}</Header>
                        <Rating icon='star' rating={business.rating} maxRating={5} />
                    </Grid.Column>
                    <Grid.Column width='8' textAlign='center'>
                        <Image.Group size='medium'>
                            <Grid>
                                <Grid.Row columns='1' centered>
                                    <Image src={business.photos[0]} />
                                </Grid.Row>
                                <Grid.Row columns='1' centered>
                                    <Image src={business.photos[1]} />
                                </Grid.Row>
                                <Grid.Row columns='1' centered>
                                    <Image src={business.photos[2]} />
                                </Grid.Row>
                            </Grid>
                        </Image.Group>
                    </Grid.Column>
                </Grid>
            );
        }
    }

    return (
        <Container>
            <Link to='/'>
                <Button id='backButton'>Back</Button>
            </Link>
            {renderLoad()}
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(BusinessShow);