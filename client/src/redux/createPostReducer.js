import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    title:'',
    id:'',
    postLikes: [],
    postDislikes: [],
    mode:'Add',
};

const slice = createSlice({
    name:'createPostModal',
    initialState:initState,
    reducers:{
       setTitle: (state, {payload}) => {
           state.title = payload;
       },
       setId: (state, {payload}) => {
           state.id = payload
       },       
       setPostLikes: (state, {payload}) => {
           state.postLikes = payload
       },
       setPostDislikes: (state, {payload}) => {
        state.postDislikes = payload
       },
       setMode: (state, {payload}) => {
        state.mode = payload
       },
    }       
});

export default slice.reducer;

export const {
    setTitle, setId, setPostLikes, setPostDislikes, setMode
} = slice.actions;

export const createPostModalSelector = state => state.createPostModal