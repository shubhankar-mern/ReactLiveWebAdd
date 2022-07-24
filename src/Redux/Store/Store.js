import { legacy_createStore as createStore } from 'redux';

import userReducer from '../Reducers/UserReducers';
//creating store
const store = createStore(userReducer);

export default store;
