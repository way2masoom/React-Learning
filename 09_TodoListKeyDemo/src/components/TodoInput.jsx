import { useState } from "react";

function TodoInput({ onSubmit }) {

    const [inputValue, setInputValue] = useState("");

    // Handel form submit
    function onFormSubmit(e) {
        e.preventDefault();
        onSubmit?.(inputValue);
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>

                <input
                    type="text"
                    placeholder="Enter your todo here"
                    onChange={(e) => { setInputValue(e.target.value) }}
                    value={inputValue}
                />

                <button>Add Todo</button>
            </form>
        </>
    )
}

export default TodoInput;