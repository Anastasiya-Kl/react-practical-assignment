import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { mainSelector, changeUserName, changeIsLogged } from '../redux/mainReducer';
import '../css/LoginPage.css';

export default function LoginPage() {

    const {userName} = useSelector(mainSelector);
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    return <div className='LoginPage'>
        <input className="LoginInput" type="text" value={userName} onChange={e => dispatch(changeUserName(e.target.value.trim()))}/>
        <button className="LoginButton" onClick={() => {
            if(userName === '') {
                setError('Enter User Name, Please!');
                return;
            }
            dispatch(changeIsLogged());
        }
            }>Login</button>
        {error && <h3 className='LoginWarning'>{error}</h3>}
    </div>
}