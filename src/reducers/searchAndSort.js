const defaultState = {
    search: '',
    stor: 'name'
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SEARCH_LIST':
            return action.payload;
        default:
            return state;

    }
}