import {useSelector, useDispatch} from 'react-redux';
import {setModalWindow , mainSelector, setPosts, setTotalPages} from '../redux/mainReducer';
import { postCommentsModalSelector, setComment, setCommentMode } from '../redux/createCommentReducer';
import getPosts from '../api/GetPosts';
import createComment from '../api/CreateComment';
import updateComment from '../api/UpdateComment';
import '../css/PostCommentsModal.css';

export default function PostCommentsModal() {

  const dispatch = useDispatch();
  const {comment, commentedPostId, commentMode, commentId, commentLikes, commentDislikes} = useSelector(postCommentsModalSelector);
  const {userName, page} = useSelector(mainSelector);

  function addCommentAction() {
    dispatch(setModalWindow('None'));
    createComment(comment, commentedPostId, userName);
    dispatch(setComment(''));
    getPosts(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
  }

  function editCommentAction() {
    dispatch(setModalWindow('None'));
    updateComment(commentId, comment, commentLikes, commentDislikes);
    getPosts(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
  }

  return <div className='Shadow'>
    <div className="PostCommentsModal">
        <h4>Add Comment</h4>
        <input type="text" name="comment" id="comment" value={comment} onChange={e => dispatch(setComment(e.target.value))}/>
        <button onClick={() => {
          if(commentMode === 'Add') addCommentAction();
          if(commentMode === 'Edit') editCommentAction();
            }
          }>{commentMode === 'Edit' ? 'Edit' : 'Add'}</button>
        <button onClick={() => {
          dispatch(setModalWindow('None'));
          dispatch(setComment(''));
          dispatch(setCommentMode('Add'));
          }
        }>Cancel</button>
    </div>
  </div>
}