import {useSelector, useDispatch} from 'react-redux';
import {mainSelector, setModalWindow, setPosts, setTotalPages} from '../redux/mainReducer';
import {createPostModalSelector, setId, setTitle, setMode} from '../redux/createPostReducer';
import createPost from '../api/CreatePost';
import getPosts from '../api/GetPosts';
import updatePost from '../api/UpdatePost';
import uploadPicture from '../api/UploadPicture';
import '../css/CreatePost.css';

export default function CreatePostModal() {

  const {userName, page} = useSelector(mainSelector);
  const {title, mode, postLikes, postDislikes, id} = useSelector(createPostModalSelector);
  const dispatch = useDispatch();

  async function onSubmitHandler(event) {
    event.preventDefault();
    let file = document.getElementById('picture').files[0];
    await createPost(title, userName).then(res => {
      setId(res);
      if(file !== undefined) uploadPicture(res, file).then(() => 
      {
        getPosts(page).then(res => {
          dispatch(setTotalPages(res.totalPages));
          dispatch(setPosts(res.result));
        }); 
      }); 
    }); 
    getPosts(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });  
    dispatch(setModalWindow('None'));
    dispatch(setTitle(''));           
  }

  async function onSubmitHadlerEdit(event) {
    event.preventDefault();
    let file = document.getElementById('picture').files[0];
    await updatePost(id, title, postLikes, postDislikes).then(() => {
      if(file !== undefined) uploadPicture(id, file).then(() => 
      {
        getPosts(page).then(res => {
          dispatch(setTotalPages(res.totalPages));
          dispatch(setPosts(res.result));
        }); 
      }); 
    }); 
    getPosts(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
    dispatch(setModalWindow('None'));
    dispatch(setMode('Add'));
  }

  return <div className='Shadow'>
      <div className="CreatePost">
          <form 
            onSubmit={(e) => {
            if(mode === 'Add') onSubmitHandler(e);
            if(mode === 'Edit') onSubmitHadlerEdit(e)
          }}
            className='CreatePostForm'>
              <h4 className='Window'>Create Post</h4>
              <input className='FormInput' type="text" name="title" value={title} onChange={e => dispatch(setTitle(e.target.value))}/>
              <input className='FormFileInput' type="file" name="pictute" id="picture"/>
              <div className='buttonGroupe'>
                <button type='submit' >{mode === 'Edit' ? 'Edit' : 'Add'}</button>
                <button className='Cancel' onClick={() => {
                    dispatch(setTitle(''));
                    dispatch(setModalWindow('None'));
                    dispatch(setMode('Add'));
                  }
                }>Cançel</button>
              </div>      
          </form>
        </div>
    </div>
  }