import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    userName:'',
    isLogged: false,    
    posts: [],
    page: 1,
    totalPages: '',
    search: '',
    modalWindow: 'None',
};

const slice = createSlice({
    name:'main',
    initialState:initState,
    reducers:{
        changeUserName: (state, {payload}) => {
            state.userName = payload;
        },
        changeIsLogged: state => {
            state.isLogged = !state.isLogged;
        },
        setPosts: (state, {payload}) => {
            state.posts = payload;
        },
        setPage: (state, {payload}) => {
            state.page = payload;
        },
        setSearch: (state, {payload}) => {
            state.search = payload;
        },
        setModalWindow: (state, {payload}) => {
            state.modalWindow = payload;
        },
        setTotalPages: (state, {payload}) => {
            state.totalPages = payload;
        }
    }       
});

export default slice.reducer;

export const {
   changeUserName, changeIsLogged,setPosts, setPage, setSearch, setModalWindow, setTotalPages
} = slice.actions;

export const mainSelector = state => state.main