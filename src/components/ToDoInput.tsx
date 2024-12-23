import React, { useState } from "react"
import {useDispatch} from 'react-redux';
import { addTodo } from "../redux/todoSlice";

const ToDoInput = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(addTodo(text))
        setText('')
    }
    return (<div>
        <input
            type = "text"
            value = { text }
            onChange = { (todoInput) => { setText(todoInput.target.value)}}
            >
        </input>
        <button onClick = {handleAdd}> Add </button>
    </div>)
}

export default ToDoInput