import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="mt-5">
            <ul className="list-group">
                {filteredTodos.map(todo => <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />)}
            
            </ul>
        </div>
    )
}

export default TodoList;