import { useState } from "react";
import TextInputForm from "./TextInputForm";


function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password")

    // Prevent form submit refresh
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted");
    }

    // Handle input change
    function handleTextInputChange(event) {
        console.log("Text Input changed");
        console.log(event.target.value);
    }

    // Show Hide click btn function
    function handleShowHideClick() {
        console.log("Show/Hide Button clicked");

        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        console.log(inputType);

    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;