import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">

            {/* Game Title */}
            <h1 className="text-5xl font-bold mb-4 text-yellow-400">
                Hangman Game
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg mb-8 text-center max-w-md">
                Guess the hidden word one letter at a time.
                Save the hangman before your attempts run out!
            </p>

            {/* Game Box */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-semibold mb-8 text-center">
                    Choose Game Mode
                </h2>

                {/* Buttons Container */}
                <div className="flex flex-col gap-4">

                    {/* Single Player */}
                    <Link
                        to="/play"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 rounded-lg text-center transition duration-300"
                    >
                        Single Player
                    </Link>

                    {/* Two Player */}
                    <Link
                        to="/start"
                        className="bg-green-500 hover:bg-green-600 text-white text-xl py-3 rounded-lg text-center transition duration-300"
                    >
                        2 Player Game
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default HomePage;