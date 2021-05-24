import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Grid container>
                <Grid.Column width='8'>
                    <Header as='h2' id='footerHeader'>Other Projects</Header>
                    <ul>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://shielded-tor-14972.herokuapp.com/'>Yelp Camp</a></li>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://nest-egg.vercel.app/'>Nest Egg</a></li>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://ping-pong-sooty.vercel.app/'>Ping Pong Scoreboard</a></li>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://jamming-ochre.vercel.app/'>Jamming</a></li>
                    </ul>
                </Grid.Column>
                <Grid.Column width='8'>
                    <Header as='h2' id='footerHeader'>Helpful Links</Header>
                    <ul>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://www.yelp.com/'>Yelp</a></li>
                        <li><a target='_blank' rel='noopener noreferrer' href='https://www.yelp.com/developers/documentation/v3'>Yelp Fusion API</a></li>
                    </ul>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default Footer;