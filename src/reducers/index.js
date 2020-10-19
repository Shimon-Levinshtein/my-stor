import { combineReducers } from 'redux';
import listStore from './listStore';
import productDitail from './productDitail';
import searchAndSort from './searchAndSort';
import changePagination from './changePagination';
import focusDivProduct from './focusDivProduct';
// import userReducer from './userReducer';
export default combineReducers({
    listStore: listStore,
    productDitail: productDitail,
    searchAndSort: searchAndSort,
    changePagination: changePagination,
    focusDivProduct: focusDivProduct,
    // users: userReducer
});