// Button compoent

function Button({ text, onClickHandler }) {
    console.log(text);
    return (
        <button
            onClick={onClickHandler}
        >{text}</button>
    )

}

export default Button;