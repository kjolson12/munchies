// eslint-disable-next-line
export default (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_LOCATION':
            return action.payload;
        default:
            return state;
    }
};