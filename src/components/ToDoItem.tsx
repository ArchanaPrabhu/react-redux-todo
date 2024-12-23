import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/todoSlice'
import { deleteTodo } from '../redux/todoSlice'
const ToDoItem = ({ id, text, completed }: any) => {
    const dispatch = useDispatch()
    return (<>
        <div>
            <input type="checkbox" onClick={() => { completed }} onChange={() => { dispatch(toggleTodo(id)) }}></input>
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    marginLeft: '10px'
                }}>
                {text}
            </span>
            <button onClick={() => dispatch(deleteTodo(id)) }> delete </button>
        </div>
    </>)
}

export default ToDoItem