import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import { useEffect, useState } from "react";

function HomePage() {
    // creating a work to send to play page
    const [word, setWord] = useState('');

    // Creating a function to feacth words 
    async function featchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);
        
        const randomIndex = Math.floor(Math.random() * data.length)
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue)
    }

    useEffect(() => {
        featchWords();
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4 text-yellow-400">
                Hangman Game
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 text-center max-w-md">
                Guess the hidden word one letter at a time.
                Save the hangman before your attempts run out!
            </p>

            {/* Card */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Choose Game Mode
                </h2>

                <div className="flex flex-col items-center gap-4">

                    {/* Single Player */}
                    <Link
                        to="/play"
                        state={{ wordSelected: word }}
                        className="w-full flex justify-center"
                    >
                        <Button
                            text="Single Player"
                            styleType="primary"
                        />
                    </Link>

                    {/* Multi Player */}
                    <Link
                        to="/start"
                        className="w-full flex justify-center"
                    >
                        <Button
                            text="2 Player Game"
                            styleType="warning"
                        />
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default HomePage;