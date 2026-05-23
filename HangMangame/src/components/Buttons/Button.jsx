import './Button.css';               // importing button style 

// Button compoent
function Button({ text, onClickHandler }) {
    console.log(text);
    return (
        <button
            onClick={onClickHandler}
            className="text-white p-2 bg-black m-10 hover:bg-amber-400"
        > {text}</button >
    )

}

export default Button;