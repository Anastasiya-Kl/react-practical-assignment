import { useSelector, useDispatch } from "react-redux";
import { mainSelector, setModalWindow, setPosts } from "../redux/mainReducer";
import deleteComment from "../api/DeleteComment";
import getPosts from "../api/GetPosts";
import updateComment from "../api/UpdateComment";
import {setComment, setCommentId, setCommentLikes, setCoommentDislikes, setCommentMode} from '../redux/createCommentReducer';
import '../css/Comment.css';

export default function Comment(props) {

    const {userName, page} = useSelector(mainSelector);
    const dispatch = useDispatch();
    
    let comment = props.comment;

    let date = new Date(parseInt(comment.date));
    let commentDate = date.toString('dd MM yyy');

    function deleteCommentHandler(id){
        deleteComment(id);
        getPosts(page).then(res => dispatch(setPosts(res.result)));
    }

    function likeComment(id) {
        let likes = [...comment.likes];
        likes.push(1);
        updateComment(id, comment.text, likes, comment.dislikes);
        getPosts(page).then(res => dispatch(setPosts(res.result)));
    }

    function dislikeComment(id) {
        let dislikes = [...comment.dislikes];
        dislikes.push(1);
        updateComment(id, comment.text, comment.likes, dislikes);
        getPosts(page).then(res => dispatch(setPosts(res.result)));
    }

    function editComment() {
        dispatch(setCommentMode('Edit'));
        dispatch(setComment(comment.text));
        dispatch(setCommentId(comment.id));
        dispatch(setCommentLikes(comment.likes));
        dispatch(setCoommentDislikes(comment.dislikes));
        dispatch(setModalWindow('PostCommentsModal'));
    }

    return <div className="Comment">
        <p className="CommentText">{comment.text}</p>
        <p className="CommentDate">{commentDate.slice(0,24)}</p>
        <div className="CommentButtons">            

                <button onClick={() => likeComment(comment.id)}>Like</button>
                <p>{comment.likes.length - comment.dislikes.length}</p>
                <button onClick={() => dislikeComment(comment.id)}>Dislike</button>

            {comment.username === userName && <>
                <button onClick={() => editComment()}>Edit</button>
                <button onClick={() => deleteCommentHandler(comment.id)}>Delete</button>      </>}
            </div>
    </div>
}