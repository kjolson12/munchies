import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Header, Image, Rating } from 'semantic-ui-react';

import { connect } from 'react-redux';

import './BusinessShow.css';

const BusinessShow = ({ business }) => {
    const renderImages = () => {
        return business.photos.map(photo => {
            return (
                <Grid.Row columns='1' centered>
                    <Image src={photo} />
                </Grid.Row>
            );
        });
    }

    const renderCategories = () => {
        return business.categories.map(category => {
            return <span key={category.alias} className='businessCategory'>{category.title}</span>;
        });
    }

    const renderLoad = () => {
        if (!business.photos) {
            return <div>Loading...</div>
        } else {
            return (
                <Grid id='businessContainer'>
                    <Grid.Column width='8' textAlign='left'>
                        <Header id='businessShowHeader'>{business.name}</Header>
                        <div id='reviewContainer'>
                            <Rating icon='star' rating={business.rating} maxRating={5} size='massive' />
                            <span id='reviewCountShow'>{business.review_count} reviews</span>
                        </div>
                        <div>
                            <span id='businessPrice'>{business.price}</span>
                            {renderCategories()}
                        </div>
                    </Grid.Column>
                    <Grid.Column width='8' textAlign='center'>
                        <Image.Group size='medium'>
                            <Grid>
                                {renderImages()}
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