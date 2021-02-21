import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './BusinessShow.css';

const BusinessShow = () => {
    return (
        <div>
            <Link to='/'>
                <Button id='backButton'>Back</Button>
            </Link>
        </div>
    );
};

export default BusinessShow;