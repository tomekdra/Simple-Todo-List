import React from 'react';

const Form = ({setInput, input, todos, setTodos, setStatus}) => {

const inputHandler = (e) => {
    setInput(e.target.value)
}

const submitTodosHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, {id: new Date(), completed: false, text: input}
    ]);
    setInput("");
}

const statusHandler = (e) => {
    setStatus(e.target.value);
}

    return (
        <form style={{background: "#dddddd"}}>
            <div className="form-group p-1 ">
                <input onChange={inputHandler} type="text" value={input}/>
                <button onClick={submitTodosHandler} type="submit" className="btn btn-secondary ml-1">Add</button>
            </div>
            <div className="form-group p-1">
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;