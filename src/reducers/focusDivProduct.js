const defaultState =  {
    UniqueId: '',
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FOCUS_DIV_PRODUCT':
            // return [...state , action.payload]
            return action.payload;
        default:
            return state;

    }
}

