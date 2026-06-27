import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../components/HangMan/HangMan";
import { WordContext } from "../components/Context/WordContext";


// Play Game Page 
function PlayGame() {
    // Access data
    const location = useLocation();
    const wordData = location.state?.wordSelected;

    const word = wordData?.wordValue;
    const hint = wordData?.wordHint;

    const [guessedLetters, setGuessedLetters] = useState([])
    const [steps, setSteps] = useState(0);

    const { wordList } = useContext(WordContext)



    function handleLetterClick(letter) {
        console.log("Letter Clicked: ", letter);
        setGuessedLetters([...guessedLetters, letter])

        if (word.toUpperCase().includes(letter)) {
            console.log("Correct Guess!");
        } else {
            console.log("Wrong Guess!");
            setSteps(steps + 1)
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 ">Play Game</h1>
            <p className="text-lg mb-6 text-green-600">Welcome to the game!</p>
            <p className="text-xl font-semibold">Hint: {hint}</p>

            {word && (
                <>
                    {wordList.map(wordObject =>
                        <li key={wordObject.id}>{wordObject.wordValue}</li>)
                    }
                    
                    <MaskedText text={word} guessedLetters={guessedLetters} />
                    <br />

                    <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                    </div>

                    <div>
                        <Hangman steps={steps} />
                    </div>

                </>
            )}
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home page</Link>
            <br />

            <Link to="/start" className="text-blue-500 hover:text-blue-700">Go Back to Start</Link>
        </div>
    )
}

export default PlayGame;