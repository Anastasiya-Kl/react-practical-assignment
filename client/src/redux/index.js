import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
    main: mainReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;