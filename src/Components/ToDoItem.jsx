import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'

function ToDoItem() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(newTodo.trim()!=="")
        {
            setTodos([... todos,newTodo]);
            setNewTodo("");
        }
    }
        // useEffect(()=>{
        //     console.log(todos[0]);
        // },[todos])

    return (
        <div className='todoitem'>
            <form onSubmit={handleFormSubmit}>
                <div className='ToDoInput_Div'>
                    <input type="text" value={newTodo}
                        onChange={(e) => {
                            setNewTodo(e.target.value)
                        }} name="toDoInput" id="toDoInput" />
                </div>
                <div className='AddToDoButton'>
                   <input type="submit" value="Add Todo" className='addInput'/>
                </div>
            </form>
            <ToDoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default ToDoItem
