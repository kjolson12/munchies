// eslint-disable-next-line
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_BUSINESS':
            return action.payload;
        default:
            return state;
    }
};