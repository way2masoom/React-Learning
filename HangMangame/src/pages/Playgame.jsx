import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


// Play Game Page 
function PlayGame() {
    // Access data
    const location = useLocation();
    const word = location.state?.wordSelected;
 
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 ">Play Game</h1>
            <p className="text-lg mb-6 text-green-600">Welcome to the game!</p>

            <p className="text-xl font-semibold">Selected Word: {word}</p>
            <Link to="/start" className="text-blue-500 hover:text-blue-700">Go Back to Start</Link>
        </div>
    )
}

export default PlayGame;