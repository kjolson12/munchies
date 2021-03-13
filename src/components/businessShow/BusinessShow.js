import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Header, Image, Rating, Divider } from 'semantic-ui-react';

import { connect } from 'react-redux';

import './BusinessShow.css';
import Map from '../map/Map';

const BusinessShow = ({ business }) => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const renderImages = () => {
        return business.photos.map(photo => {
            return (
                <Grid.Row key={photo} columns='1' centered>
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

    const renderOpen = () => {
        if (business.hours) {
            if (business.hours[0].is_open_now) {
                return <span id='businessOpen'>Open</span>
            } else {
                return <span id='businessClosed'>Closed</span>
            }
        } return <span id='businessClosed'>No hours for this business</span>
    }

    const renderHours = () => {
        if (!business.hours) return;

        const openTime = business.hours[0].open[dayOfWeek].start;
        const closeTime = business.hours[0].open[dayOfWeek].end;

        const amPM = hours => hours < 1200 ? 'AM' : 'PM';
        const convertHours = hours => {
            const hour = parseInt(hours.toString().slice(0, 2));

            return hour > 12 ? hour - 12 : hour;
        };
        const convertMinutes = hours => hours.toString().slice(2);

        const openHour = convertHours(openTime);
        const openMinute = convertMinutes(openTime);
        const openAmPm = amPM(openTime);

        const closeHour = convertHours(closeTime);
        const closeMinute = convertMinutes(closeTime);
        const closeAmPm = amPM(closeTime);

        return (
            <span id='todaysHours'>
                {openHour}:{openMinute}{openAmPm} - {closeHour}:{closeMinute}{closeAmPm}
            </span>
        );
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
                        <div id='categoryContainer'>
                            <span id='businessPrice'>{business.price}</span>
                            {renderCategories()}
                        </div>
                        <div id='hoursContainer'>
                            {renderOpen()}
                            {renderHours()}
                        </div>
                        <Divider inverted />
                        <div>
                            <Header id='locationHeader' size='large'>Location & Hours</Header>
                            <Map lng={business.coordinates.longitude} lat={business.coordinates.latitude} />
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