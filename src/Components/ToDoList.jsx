import React, { useEffect, useState } from 'react'

function ToDoList(props) {
    const { todos, setTodos } = props;
    const [isStyled, setIsStyled] = useState(new Array(todos.length).fill(false));

    useEffect(
        () => {
            setIsStyled(new Array(todos.length).fill(false))
        }
        , []);

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);

        const updateInStyled = [...isStyled];
        updateInStyled.splice(index,1);
        setIsStyled(updateInStyled);
    }
    const handleTodoStatus = (index) => {
        const updatedIsStyled = [...isStyled];
        updatedIsStyled[index] = true;
        setIsStyled(updatedIsStyled);
    }

    return (
        <div className='todolist'>
            <div className='todocollection'>
                {
                    todos.map((todo, index) => {
                        return <div key={index} className='singleTodo'>

                            <p className={isStyled[index] ? 'isGreen' : 'isRed'}>{index+1}. {todo}</p>
                            <div className='allButtons'>
                                <button onClick={() => {
                                    handleDelete(index)
                                }}>Delete</button>
                                <button onClick={() => {
                                    handleTodoStatus(index);
                                }}>Completed</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ToDoList
