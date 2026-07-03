
import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([{ id: 1, value: "Do Home Work" }])

  // function to delete todo 
  function deleteTodoById(id) {
    setTodos(todos.filter(todos => todos.id !== id));
  }

  // Funtion to stop form reloading
  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { id: todos.length + 1, value }])
    }
  }


  return (
    <>
      <h1>Todo App</h1>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById} />
    </>
  )
}

export default App
