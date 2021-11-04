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
    <h1>掲示板</h1>
      <div>
        { todos.map((todo,index) => (
          <div class = "contents">
          <span>
          名前:
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
      <form onSubmit={ handleSubmit }>
      名前 : <input value={ title } placeholder="No Name" onChange={handleNewTitle}/>
    </form>
    <form onSubmit={ handleSubmit }>
       <textarea value={ task } placeholder="" cols="40" rows="8" onChange={handleNewTask}/>
    </form>
    <footer>
      Hrizon
    </footer>
    </body>
  );
}

export default TodoList
