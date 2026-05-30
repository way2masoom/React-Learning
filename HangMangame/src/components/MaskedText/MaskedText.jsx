import { getMaskedSting } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
    const maskedString = getMaskedSting(text, guessedLetters)
    return (
        <>
            <h1>masked string {maskedString}</h1>
        </>
    ) 
}

export default MaskedText;