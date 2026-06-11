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
        console.log(event.target.value);
        setValue(event.target.value)
    }

    // Show Hide click btn function
    function handleShowHideClick() {

        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        console.log(inputType);

    }

    // useeffect function 
    // useEffect(() => {
    //     console.log("Component first load"); // not on update
    // }, []) // passing empty dependency array

    // useEffect(() => {
    //     console.log("Components loded and changed");
    // })

    // useEffect(() => {
    //     console.log("component first loaded and updated value");
    // }, [value])

    // useEffect(() => {
    //     console.log("Input type changed");
    // }, [inputType])




    return (
        <>
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />


        </>
    )
}


export default TextInputFormContainer;