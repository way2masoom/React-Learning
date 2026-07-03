
import { useCallback, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([{ value: "Do Home Work" }])

  // function to delete todo 
  function deleteTodoById(value) {
    setTodos(todos.filter(todos => todos.value !== value));
  }

  // memoizing delete todo
  const memoDeleteTodoCallBack = useCallback(deleteTodoById, [todos])


  // Funtion to stop form reloading
  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { value }])
    }
  }


  return (
    <>
      <h1>Todo App</h1>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} onDeleteTodo={memoDeleteTodoCallBack} />
    </>
  )
}

export default App
