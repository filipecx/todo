import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquare as farSquare, faSquareCheck as farSquareCheck } from '@fortawesome/free-regular-svg-icons'


export function Todo({titulo, checked, id, dia, toggleCheck, removeTodo}){
        return(
                <div className="Todo">
                        <p>{titulo}</p>
                        <div>
                                <button className='todo-btn' onClick={() => toggleCheck(id)}>{checked == 'true' ? <FontAwesomeIcon icon={farSquareCheck} />: <FontAwesomeIcon icon={farSquare} />}</button>
                                 
                                <button className='todo-btn' onClick={() => removeTodo(id)}>{<FontAwesomeIcon icon={faTrash} />}</button>
                        </div>              
                </div>
        )
}