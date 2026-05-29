import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password") // state to hold the type of the input field, default is password
    const [value, setValue] = useState("") // state to hold the value of the input field

    const navigate = useNavigate() // useNavigate hook to programmatically navigate to another route

    // Prevent form submit refresh
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", value);


        if (value) {
            // if we have something in the input field, we navigate to the play page
            navigate("/play", {
                state: {
                    wordSelected: value
                }
            })
        }
    }

    // Handle input change
    function handleTextInputChange(event) {
        console.log("Text Input changed");
        console.log(event.target.value);
        setValue(event.target.value)
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