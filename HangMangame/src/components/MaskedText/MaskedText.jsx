import { getMaskedSting } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
    const maskedString = getMaskedSting(text, guessedLetters)
    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1 ">{letter}</span>
                )
            })}
        </>
    )
}

export default MaskedText;