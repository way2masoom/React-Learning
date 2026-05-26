import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";




// start game component
function StartGame() {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold mb-4">Welcome to Hangman Game!</h1>
                <TextInputFormContainer />
                <Link to="/play" className="text-blue-500 hover:text-blue-700">Play Game</Link>
            </div>
        </> /* this called react fragment  */
    )
}

export default StartGame;