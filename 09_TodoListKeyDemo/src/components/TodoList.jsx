import TodoListIteam from "./TodoListIteam";

// TodoList
function TodoList({ listOfTodos }) {
    return (
        <ul>
            {listOfTodos.map((todo) => {
                return <TodoListIteam key={todo.id} todo={todo} />
            })}
        </ul>
    )
}

export default TodoList;