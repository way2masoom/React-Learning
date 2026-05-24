
// Input component
function TextInput({ type = "text", label, placeholder = "Enter you TEXT here", onChangeHandler }) {
    return (
        <label>
            <span className="text-gray-700">{label}</span>
            <input
                type={type}
                className="px-4 py-3 m-2 border bg-black text-white rounded-md bg-center w-full"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />

        </label>
    )
}

export default TextInput;