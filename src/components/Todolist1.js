import React, { useState} from 'react';

function TodoList() {

  const [task, setTask,] =
  useState( '' )
  const [title, setTitle,] =
  useState( '' )
  const initialState = [
    {
      task: 'Learnvue.js',
      title: 'foo',
      isCompleted: false
    },
    {
      task: 'LearnGatsby.js',
      title: 'bar',
      isCompleted: false
    },
  ]

  const [todos, setTodo] = useState(initialState);

  const handleNewTask =
(event) => {
  setTask(event.target.value)
}

const handleNewTitle =
(event) => {
  setTitle(event.target.value)
}

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    setTodo(todos =>
    [...todos,{ task,title,isCompleted: false}])
    setTask('')
    setTitle('')
  }


  return (
    <body>
    <h1>TodoList</h1>
    <form onSubmit={ handleSubmit }>
    Add Title : <input value={ title } placeholder="Add Title" onChange=
    {handleNewTitle}/>
    </form>
    <form onSubmit={ handleSubmit }>
    Add Task : <input value={ task } placeholder="Add New Task" onChange=
    {handleNewTask}/>
    </form>
      <div>
        { todos.map((todo,index) => (
          <div class = "contents">
          <span>
          Title:  
          </span>
          <span>
            {todo.title}
          </span>
            <div>
              {todo.task }
            </div>
          </div>
          ))}
      </div>
    </body>
  );
}

export default TodoList
