import { useSelector } from "react-redux"
import ToDoItem from "./ToDoItem";
import { Todo } from "../redux/todoSlice";
const ToDoList = () => {

    const todos = useSelector((state: any) => state.todos) ;

    return (<>
        <div> 
            {
                todos.length === 0 ? (
                    <p> No tasks yet</p>
                ) : (
                    todos.map((todo: Todo) => 
                    <ToDoItem key = {todo.id} id = {todo.id} text = {todo.text} completed={todo.completed}/>)
                )
            }
        </div>
    </>)
}

export default ToDoList