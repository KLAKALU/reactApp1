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

  const handleRemoveTask = index => {
      const newTodos = [...todos]
      newTodos.splice(index,1)
      setTodo(newTodos)
  }

  const handleUpdateTask = index => {
  let newTodos = todos.map((todo,todoIndex) => {
    if(todoIndex  === index){
        todo.isCompleted = !todo.isCompleted
    }
    return todo;
  })
  setTodo(newTodos);
}

  const handleNewTask =
(event) => {
  setTask(event.target.value)
}
  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    setTodo(todos =>
    [...todos,{ task,isCompleted: false}])
    setTask('')
  }


  return (
    <head>
    </head>
    <body>
    <h1>TodoList</h1>
    <form onSubmit={ handleSubmit }>
    Add Title : <input value={ title } placeholder="Add Title" onChange=
    {handleNewTask}/>
    </form>
    <form onSubmit={ handleSubmit }>
    Add Task : <input value={ task } placeholder="Add New Task" onChange=
    {handleNewTask}/>
    </form>
      <div>
        { todos.map((todo,index) => (
          <div class = "contents">
            <div key={ index }style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}
            >
              {todo.task }
              {todo.title}
            </div>
            <div class="content">
              <span onClick={ () => handleRemoveTask(index)}>X</span>
              <span>　|　</span>
              <span onClick={ () => handleUpdateTask(index) }>✔</span>
            </div>
          </div>
          ))}
      </div>
    </body>
  );
}

export default TodoList
