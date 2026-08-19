import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import { getRandomWord } from "../../utils/wordBank";
import { sounds } from "../../utils/audioUtility";

function TextInputFormContainer() {
    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleHintInputChange(event) {
        setHint(event.target.value);
        if (error) setError("");
    }

    function handleTextInputChange(event) {
        const text = event.target.value.toUpperCase();
        setValue(text);
        if (error) setError("");
    }

    function handleShowHideClick() {
        sounds.playClick();
        setInputType(prev => (prev === "password" ? "text" : "password"));
    }

    function handleRandomWordFill() {
        sounds.playClick();
        const randomItem = getRandomWord();
        setValue(randomItem.wordValue);
        setHint(randomItem.wordHint);
        setInputType("password");
        setError("");
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const cleanWord = value.trim().toUpperCase();
        if (!cleanWord) {
            setError("Please enter a secret word!");
            sounds.playWrong();
            return;
        }

        // Validate word characters (letters and spaces only)
        if (!/^[A-Z\s]+$/.test(cleanWord)) {
            setError("Please use letters only (no numbers or special symbols).");
            sounds.playWrong();
            return;
        }

        if (cleanWord.replace(/\s/g, '').length < 3) {
            setError("Word must be at least 3 letters long.");
            sounds.playWrong();
            return;
        }

        sounds.playCorrect();
        navigate("/play", {
            state: {
                wordSelected: {
                    wordValue: cleanWord,
                    wordHint: hint.trim() || "No hint provided - good luck!"
                },
                isMultiplayer: true
            }
        });
    }

    return (
        <TextInputForm
            inputType={inputType}
            value={value}
            hint={hint}
            error={error}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleHintInputChange={handleHintInputChange}
            handleShowHideClick={handleShowHideClick}
            handleRandomWordFill={handleRandomWordFill}
        />
    );
}

export default TextInputFormContainer;