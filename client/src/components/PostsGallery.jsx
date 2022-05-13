import { useSelector, useDispatch } from "react-redux";
import getPosts from '../api/GetPosts';
import { mainSelector, setTotalPages, setPosts } from "../redux/mainReducer";
import Post from './Post';
import { useEffect } from "react";

export default function PostsGallery() {

    const {posts, page} = useSelector(mainSelector);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getPosts(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    },[dispatch, page] ) 

    return <div className="PostsGallery">
        {posts.map(post => <Post key={post.id} id={post.id} post={post} />)}
    </div>
}