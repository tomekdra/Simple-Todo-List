import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(localTodos);
    }
  }

  useEffect(() => {


    getTodos();

  }, []);

  useEffect(() => {
     
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => !todo.completed))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }
  
    const saveTodos = () => {
      //  if(localStorage.getItem("todos") === null){
      //   localStorage.setItem("todos", JSON.stringify([]))
      // } else {
        localStorage.setItem("todos", JSON.stringify(todos))
    // }
    };

    filterHandler();
    saveTodos();
  
  }, [todos, status])
  
  
 

  return (
    <div className="bg-secondary vh-100 p-3 d-flex align-items-center ">
      <header className="container d-flex justify-content-center bg-white align-items-center h-75 flex-column">
        <h1>Simple Todo List</h1>
        <Form  input={input} setInput={setInput} todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </header>
      
    </div>
  );
}

export default App;
