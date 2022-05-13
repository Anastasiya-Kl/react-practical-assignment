import {useSelector, useDispatch} from 'react-redux'
import { mainSelector, setPage } from '../redux/mainReducer';
import '../css/Pagination.css';


export default function Pagination() {

    const {page, totalPages} = useSelector(mainSelector);
    const dispatch = useDispatch();

    let displayPages = [];
    let active = null;

    for(let i = 0; i < totalPages; i++) {
        if(page === i + 1) {
            active = 'Active'
        } else {
            active = null;
        };
        displayPages.push(<div key={i} className={active} onClick={() => dispatch(setPage(i + 1))}>{i + 1}</div>)
    }


    return <div className="Pagination">
        {displayPages}
    </div>
}