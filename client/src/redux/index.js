import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';
import createPostReducer from './createPostReducer';
import createCommentReducer from './createCommentReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    createPostModal: createPostReducer,
    postCommentsModal: createCommentReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;