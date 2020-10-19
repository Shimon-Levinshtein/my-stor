export const addProductToTheList = (obj) => {
    return { type: 'ADD_PRODUCT', payload: obj };
}

export const editProductToTheList = (obj) => {
    return { type: 'EDIT_PRODUCT', payload: obj };
}

export const deleteProductToTheList = (obj) => {
    return { type: 'DELETE_PRODUCT', payload: obj };
}