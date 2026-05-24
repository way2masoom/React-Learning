import getButtonStyling from "./getButton"; // importing helper btn function


// Button compoent
function Button({ text,type='button',onClickHandler, styleType = "primary" }) {
    console.log(text);
    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`text-white px-3.75 py-2 m-1 rounded-[5px] ${getButtonStyling(styleType)}`}
        >

            {text}

        </button >
    )

}

export default Button;