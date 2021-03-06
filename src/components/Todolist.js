import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
function TodoList() {

    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },
    ]

    const [todos, setTodo] = useState(initialState);

    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask( event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '') return
        setTodo(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={ handleSubmit }>
            Add Task : <input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
            </form>
            <ul>
                { todos.map((todo, index) => (
                <li key={ index }>{ todo.task } <span onClick={ () => handleRemoveTask(index) }>X</span></li>
                ))}
            </ul>
            <span>
                github <HeartFill color={id ? 'red' : 'gray'} size={32} onClick={clicked}/>
            </span>
        </div>
  );
}

export default TodoList;
