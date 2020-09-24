import React from 'react'

const Todo = ({text, setTodos, todos, todo}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed && 'list-group-item-secondary'}`}>{text} 
        <span>        
            <button onClick={completeHandler} className={`btn ${todo.completed ? 'btn-secondary' : 'btn-success' } ml-2`}>Done</button>
            <button onClick={deleteHandler} className="btn btn-danger ml-2">Trash</button>
        </span>
        </li>
    )
}

export default Todo;