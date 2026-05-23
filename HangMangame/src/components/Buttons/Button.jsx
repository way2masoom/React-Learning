import './Button.css';               // importing button style 

// Button compoent
function Button({ text, onClickHandler }) {
    console.log(text);
    return (
        <button
            onClick={onClickHandler}
            className="btn"
        > {text}</button >
    )

}

export default Button;