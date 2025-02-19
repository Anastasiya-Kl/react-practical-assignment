import {useEffect} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import { useSelector } from 'react-redux';
import { mainSelector } from './redux/mainReducer';
import CreatePostModal from './components/CreatePostModal'
import PostCommentsModal from './components/PostCommentsModal';

function App() {

  const { isLogged, modalWindow } = useSelector(mainSelector);

  useEffect(() => {
    // TEST API, it might be removed
    fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
  }, []);

  return (
    <div className="App">
      {isLogged ? <MainPage/> : <LoginPage/>}
      {modalWindow === 'CreatePostModal' && <CreatePostModal />}
      {modalWindow === 'PostCommentsModal' && <PostCommentsModal />}
    </div>
  );
}

export default App;
