const defaultState =  {
    name: '',
    url: '',
    description: '',
    price: '',
    button: 'Add project',
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'PRODUCT_DITEIL':
            // return [...state , action.payload]
            return action.payload;
        default:
            return state;

    }
}