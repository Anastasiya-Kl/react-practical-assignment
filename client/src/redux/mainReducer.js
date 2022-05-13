import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    isLogin: false,
    posts: [],
    page: 1,
    totalPages: '',
    search: '',
}

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        changeIsLogin(state) {
            state.isLogin = !state.isLogin;
        },
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
        setSearch(state, action) {
            state.search = action.payload; 
        }
    }
});

export default mainSlice.reducer;

export const {setUser, changeIsLogin, setPosts, setPage, setTotalPages, setSearch} = mainSlice.actions;

export const mainSelector = (state) => state.main;