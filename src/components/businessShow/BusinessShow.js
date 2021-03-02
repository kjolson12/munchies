import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Rating } from 'semantic-ui-react';

import './BusinessShow.css';

const BusinessShow = ({ business }) => {
    const renderImages = () => {
        business.photos.map(photo => {
            console.log(photo);
            return <Image src={photo} />
        });
    }

    const renderLoad = () => {
        if (!business.name) {
            return <div>Loading...</div>
        } else {
            return (
                <div id='businessContainer'>
                    <Image.Group size='small'>{renderImages()}</Image.Group>
                    <Header>{business.name}</Header>
                    <Rating icon='star' rating={business.rating} maxRating={5} />
                </div>
            );
        }
    }

    return (
        <div>
            <Link to='/'>
                <Button id='backButton'>Back</Button>
            </Link>
            {renderLoad()}
        </div>
    );
};

export default BusinessShow;