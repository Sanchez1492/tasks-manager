import './TodoItem.css'
import checkImage from './icons/check-icon.png'
import minusImage from './icons/minus.png'
import deleteImage from './icons/delete.png'

function TodoItem (props) {
    return (
      <li
        className={`${props.completed}`}
      >
        <img 
        onClick={props.onComplete}
        src={`${props.completed? checkImage : minusImage}`} className="checked"></img>
        <p>{props.text}</p>
        <img
        src={deleteImage}
        className="delete"
        onClick = {props.onDelete}
        ></img>
      </li>
    );
}

export { TodoItem }