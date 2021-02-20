import axios from 'axios';

const apiKey = 'eGabxjjmOWmymwl6LhEQ3fe_1w7M7qd0xhsxL3ISAHp_RBFphFAmw_Ab1lujnavUbjEHE6_aLnu1VMkVU4231kn2DheWXqNrhRPmxlLsFNiPoxScokNoQJmBBhYCX3Yx';

export default axios.create({
    baseURL: `https://kyles-cors-anywhere.herokuapp.com/https://api.yelp.com/v3`,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});