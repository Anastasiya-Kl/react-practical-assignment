import Comment from './Comment';
import '../css/CommentSection.css';


export default function CommentSection(props) {
    return <div className="CommentsSection" style={{display: props.commentSectionVision}}>
        <button className='CommentSectionClose' onClick={() => props.setCommentsSectionVision('none')}>Close comments</button>
        <div className="CommentsList">{props.comments.map(c => <Comment key={c.id} id={c.id} comment={c}/>)}</div>
        
    </div>
}