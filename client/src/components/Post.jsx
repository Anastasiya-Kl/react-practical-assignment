// import {useDispatch, useSelector} from 'react-redux';
// import { mainSelector } from '../redux/mainReducer';

export default function Post(postData) {

    let postDate = new Date(postData.date).toString('dd MM YYYY'); //

    return <div className='Post'>
        <h2 className='Title'>{postData.title}</h2>
        <img className='Image' src={postData.imageSrc} alt="imagePost" />
        <p className='Date'>{postDate}</p>
        <h3 className='User'>{postData.username}</h3>
    </div>
}