const defaultState = {
    firstPage: 1,
    targetPage: 1,
    lastPage: 1,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_ALL_PAGINATION':
            return action.payload;
        case 'CHANGE_PAGINATION':
            return {...state , ...action.payload};
        default:
            return state;

    }
}