import { useSelector, useDispatch } from "react-redux";
import { mainSelector, setSearch, setPage, setPosts, setTotalPages } from "../redux/mainReducer";
import searchPost from '../api/SearchPost';
import getPosts from '../api/GetPosts';
import { useState } from 'react';
import '../css/Search.css';

export default function MainPageSearchBar() {

    const {search, page} = useSelector(mainSelector);
    const dispatch = useDispatch();

    const [notFound, setNotFound] = useState('');

    function handleEnterPress(event) {
        if(event.key === "Enter") {
            setNotFound('');
            if(search === '') {
                dispatch(setPage(1));
                getPosts(page).then(res => {
                    dispatch(setTotalPages(res.totalPages));
                    dispatch(setPosts(res.result));
                });
                return
            }
            searchPost(search).then(res => {
                    dispatch(setTotalPages(0))
                    if(res.result.length === 0) setNotFound('Not Found!')
                    dispatch(setPosts(res.result));                    
                }
            );            
        }
    }

    return <div className="SearchBar">
        <input className='SearchBarInput' type="text" value={search} onChange={e => dispatch(setSearch(e.target.value))} onKeyPress={(e) => handleEnterPress(e)}/>
        <p>{notFound}</p>
    </div>
}