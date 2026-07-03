import { useCallback } from "react";
import TodoListIteam from "./TodoListIteam";

// TodoList
function TodoList({ listOfTodos, onDeleteTodo }) {

    function deleteTodo(v) {
        console.log("Deleted Todo with Id:", v);
        onDeleteTodo?.(v)
    }

    const memoDeleteTodoCallBack = useCallback(deleteTodo, [onDeleteTodo]);

    return (
        <ul>
            {listOfTodos.map((todo) => {
                return <TodoListIteam key={todo.value} todo={todo} onDelete={memoDeleteTodoCallBack} />
            })}
        </ul>
    )
}

export default TodoList;