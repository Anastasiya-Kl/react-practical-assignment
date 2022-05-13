import { useSelector, useDispatch } from "react-redux";
import { mainSelector, changeUserName, changeIsLogged, setModalWindow, setPage } from "../redux/mainReducer"; 
import '../css/Header.css';

export default function Header() {

    const {userName} = useSelector(mainSelector);
    const dispatch = useDispatch(changeUserName());

    return <div className="Header">
        <h1 className='HeaderUser'>{userName}</h1>
        <button className='HeaderButton' onClick={() => dispatch(setModalWindow('CreatePostModal')) }>Add new Post</button>
        <button className='HeaderButton' onClick={() => {
            dispatch(changeUserName(''));
            dispatch(changeIsLogged());
            dispatch(setPage(1));
        }}>Log Out</button>
    </div>
}