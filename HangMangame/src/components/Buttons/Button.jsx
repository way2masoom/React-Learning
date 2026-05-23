// Button compoent

function Button({ text, onClickHandler }) {
    console.log(text);
    return (
        <button
            onClick={onClickHandler}
            style={{
                padding: "10px",
                margin: "20px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "black"
            }}
        > {text}</button >
    )

}

export default Button;