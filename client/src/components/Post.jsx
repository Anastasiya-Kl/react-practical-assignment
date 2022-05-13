import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { mainSelector, setPosts, setModalWindow , setTotalPages } from '../redux/mainReducer';
import getPosts from '../api/GetPosts';
import deletePost from '../api/DeletePost.js';
import updatePost from '../api/UpdatePost';
import { setCommentedPostId } from "../redux/createCommentReducer";
import { setMode, setTitle, setId, setPostDislikes, setPostLikes } from "../redux/createPostReducer";
import CommentSection from "./CommentSection";
import '../css/Post.css';
import like from '../like.png';
import dislike from '../dislike.png';
import flowers from '../flowers.jpg';

export default function Post(props) {

    let post = props.post;

    const {page, userName} = useSelector(mainSelector);
    const dispatch = useDispatch();

    const [commentSectionVision, setCommentsSectionVision] = useState('none');

    let postDate = new Date(post.date).toString('dd MM YYYY');

    async function deletePostHandler(id) {
        await deletePost(id);
        await getPosts(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    }

    // function likeComment(id) {
    //     let likes = [...comment.likes];
    //     likes.push(1);
    //     updateComment(id, comment.text, likes, comment.dislikes);
    //     getPosts(page).then(res => dispatch(setPosts(res.result)));
    // }

    function likePost(id) {
        let likes = [...post.likes];
        likes.push(1);
        updatePost(id, post.title, likes, post.dislikes);
        getPosts(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    }

    function dislikePost(id) {
        let dislikes = [...post.dislikes];
        dislikes.push(1);
        updatePost(id, post.title, post.likes, dislikes);
        getPosts(page).then(res => dispatch(setPosts(res.result)));
    }

    function editPost() {
        dispatch(setMode('Edit'));
        dispatch(setModalWindow('CreatePostModal'));
        dispatch(setTitle(post.title));
        dispatch(setId(post.id));
        dispatch(setPostLikes(post.likes));
        dispatch(setPostDislikes(post.dislikes));
    }

    
    return <div className='Post'>
        <h2 className='Title'>{post.title}</h2>
        <img className='Image' src={flowers} alt="imagePost" />
        <p className='Date'>{postDate.slice(0,24)}</p>
        <h3 className='User'>{post.username}</h3>

        <div className="Likes">
            <button onClick={() => likePost(post.id)}><img src={like} alt='like' /></button>
            <h3>{post.likes.length - post.dislikes.length}</h3>
            <button onClick={() => dislikePost(post.id)}><img src={dislike} alt='dislike' /></button>  
        </div>

        <div className="PostButtons">
            <button 
                className="AddComment" 
                onClick={() => {
                    dispatch(setModalWindow('PostCommentsModal'));
                    dispatch(setCommentedPostId(post.id));
                }
            }>Add Comment</button>
            <button onClick={() => {setCommentsSectionVision('block')}}>Comments</button>  

            {userName === post.username && <>
                <button className="DeleteButton" onClick={() => deletePostHandler(post.id)}>Delete</button>
                <button onClick={() => editPost()}>Edit post</button>
            </>}
        </div>

        <CommentSection 
            comments={post.comments} 
            commentSectionVision={commentSectionVision} 
            setCommentsSectionVision={setCommentsSectionVision} 
        />
    </div>


}