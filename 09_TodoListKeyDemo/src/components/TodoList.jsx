import TodoListIteam from "./TodoListIteam";

// TodoList
function TodoList({ listOfTodos, onDeleteTodo }) {

    function deleteTodo(id) {
        console.log("Delted Todo with Id :", id);
        onDeleteTodo?.(id)
    }

    return (
        <ul>
            {listOfTodos.map((todo) => {
                return <TodoListIteam key={todo.id} todo={todo} onDelete={deleteTodo} />
            })}
        </ul>
    )
}

export default TodoList;