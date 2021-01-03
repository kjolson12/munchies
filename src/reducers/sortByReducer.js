// eslint-disable-next-line
export default (state = 'best_match', action) => {
    switch (action.type) {
        case 'SORT_BY':
            return action.payload;
        default:
            return state;
    }
};