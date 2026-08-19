import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState, useEffect, useCallback } from "react";
import Hangman from "../components/HangMan/HangMan";
import { WordContext } from "../components/Context/WordContext";
import Navbar from "../components/Navbar/Navbar";
import GameOverModal from "../components/GameOverModal/GameOverModal";
import Toast from "../components/Toast/Toast";
import RulesModal from "../components/RulesModal/RulesModal";
import { getRandomWord } from "../utils/wordBank";
import { sounds } from "../utils/audioUtility";
import { triggerConfetti } from "../utils/confetti";

const MAX_MISTAKES = 7;

function getValidWord(data, category = "All") {
    if (!data) return getRandomWord(category);
    if (typeof data === "string" && data.trim().length > 0) {
        return { wordValue: data.trim().toUpperCase(), wordHint: "Guess the word" };
    }
    if (typeof data === "object" && data.wordValue && String(data.wordValue).trim().length > 0) {
        return {
            ...data,
            wordValue: String(data.wordValue).trim().toUpperCase(),
            wordHint: data.wordHint || "No hint provided"
        };
    }
    return getRandomWord(category);
}

function PlayGame() {
    const location = useLocation();
    const navigate = useNavigate();
    const { wordList } = useContext(WordContext);

    const category = location.state?.category || "All";
    const isMultiplayer = location.state?.isMultiplayer || false;

    // Word state
    const [currentWordData, setCurrentWordData] = useState(() => 
        getValidWord(location.state?.wordSelected, category)
    );
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [steps, setSteps] = useState(0);
    const [gameStatus, setGameStatus] = useState("playing"); // 'playing' | 'win' | 'lose'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRulesOpen, setIsRulesOpen] = useState(false);
    const [toast, setToast] = useState(null);
    const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('hangman_streak') || '0', 10));

    // Synchronize whenever location key or state changes
    useEffect(() => {
        if (location.state?.wordSelected) {
            const nextWord = getValidWord(location.state.wordSelected, category);
            setCurrentWordData(nextWord);
            setGuessedLetters([]);
            setSteps(0);
            setGameStatus("playing");
            setIsModalOpen(false);
        }
    }, [location.key, location.state, category]);

    const word = (currentWordData?.wordValue || "").trim().toUpperCase();
    const hint = currentWordData?.wordHint || "No hint available";

    const showToastMessage = (message, type = "info") => {
        setToast({ message, type });
    };

    // Check Win/Loss conditions
    const checkGameStatus = useCallback((newGuessed, newSteps) => {
        if (!word || word.length === 0) return;

        // Letters needed (ignoring spaces)
        const cleanWordLetters = word.replace(/\s/g, '').split('');
        if (cleanWordLetters.length === 0) return;

        const guessedSet = new Set(newGuessed.map(l => l.toUpperCase()));
        const isWin = cleanWordLetters.every(char => guessedSet.has(char));

        if (isWin) {
            setGameStatus("win");
            setIsModalOpen(true);
            triggerConfetti();
            sounds.playWin();
            showToastMessage("🎉 Awesome! You saved the Hangman!", "success");

            // Update stats
            const currentWins = parseInt(localStorage.getItem('hangman_wins') || '0', 10) + 1;
            const newStreak = streak + 1;
            const bestStreak = Math.max(newStreak, parseInt(localStorage.getItem('hangman_best_streak') || '0', 10));
            
            localStorage.setItem('hangman_wins', currentWins.toString());
            localStorage.setItem('hangman_streak', newStreak.toString());
            localStorage.setItem('hangman_best_streak', bestStreak.toString());
            setStreak(newStreak);
            return;
        }

        if (newSteps >= MAX_MISTAKES) {
            setGameStatus("lose");
            setIsModalOpen(true);
            sounds.playLose();
            showToastMessage(`💀 Game Over! The word was ${word}`, "error");

            // Update stats
            const currentLosses = parseInt(localStorage.getItem('hangman_losses') || '0', 10) + 1;
            localStorage.setItem('hangman_losses', currentLosses.toString());
            localStorage.setItem('hangman_streak', '0');
            setStreak(0);
        }
    }, [word, streak]);

    // Handle letter guess
    const handleLetterClick = useCallback((letter) => {
        if (gameStatus !== "playing") return;
        const upperLetter = letter.toUpperCase();
        if (guessedLetters.includes(upperLetter)) return;

        const nextGuessed = [...guessedLetters, upperLetter];
        setGuessedLetters(nextGuessed);

        if (word.includes(upperLetter)) {
            sounds.playCorrect();
            showToastMessage(`Great! Letter '${upperLetter}' is in the word 🎯`, "success");
            checkGameStatus(nextGuessed, steps);
        } else {
            sounds.playWrong();
            const nextSteps = steps + 1;
            setSteps(nextSteps);
            const livesLeft = MAX_MISTAKES - nextSteps;

            if (livesLeft === 1) {
                showToastMessage("⚠️ Warning! Only 1 life remaining!", "warning");
            } else if (livesLeft > 0) {
                showToastMessage(`Miss! '${upperLetter}' is not in the word (${livesLeft} lives left)`, "error");
            }
            checkGameStatus(nextGuessed, nextSteps);
        }
    }, [gameStatus, guessedLetters, word, steps, checkGameStatus]);

    // Physical Keyboard Listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isModalOpen || isRulesOpen) return;
            const key = e.key.toUpperCase();
            if (/^[A-Z]$/.test(key)) {
                handleLetterClick(key);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleLetterClick, isModalOpen, isRulesOpen]);

    // Reset current game with same word
    const handleResetCurrentWord = () => {
        sounds.playClick();
        setGuessedLetters([]);
        setSteps(0);
        setGameStatus("playing");
        setIsModalOpen(false);
        showToastMessage("Game reset! Try again.", "info");
    };

    // Play next random word
    const handlePlayNextWord = () => {
        sounds.playClick();
        let nextWord;
        if (wordList && wordList.length > 0) {
            const remaining = wordList.filter(w => w.wordValue && w.wordValue.toUpperCase() !== word);
            if (remaining.length > 0) {
                const randomIdx = Math.floor(Math.random() * remaining.length);
                nextWord = remaining[randomIdx];
            } else {
                nextWord = getRandomWord(category, word);
            }
        } else {
            nextWord = getRandomWord(category, word);
        }

        setCurrentWordData(getValidWord(nextWord, category));
        setGuessedLetters([]);
        setSteps(0);
        setGameStatus("playing");
        setIsModalOpen(false);
        showToastMessage("New mystery word ready! Good luck!", "info");
    };

    const handleGoHome = () => {
        sounds.playClick();
        navigate("/");
    };

    return (
        <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-10 left-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Toast Notifications */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            {/* Navigation Header */}
            <Navbar streak={streak} onOpenRules={() => setIsRulesOpen(true)} />

            {/* Gameplay Arena */}
            <main className="w-full max-w-4xl mx-auto px-4 py-2 flex flex-col items-center text-center z-10 flex-grow justify-around">
                
                {/* Top Control Bar */}
                <div className="w-full max-w-2xl flex items-center justify-between px-2 mb-1">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400">
                            {isMultiplayer ? "👥 2-Player Match" : `📁 ${category}`}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                            {word.replace(/\s/g, '').length} Letters
                        </span>
                    </div>

                    <button
                        onClick={handleResetCurrentWord}
                        className="px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Restart current word"
                    >
                        <span>🔄</span>
                        <span className="hidden sm:inline">Restart Word</span>
                    </button>
                </div>

                {/* Hangman Illustration Frame */}
                <div className="my-1">
                    <Hangman steps={steps} maxSteps={MAX_MISTAKES} />
                </div>

                {/* Prominent Hint & Clue Banner (Always Visible) */}
                <div className="w-full max-w-lg mx-auto my-2 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-400/40 shadow-lg shadow-amber-500/10 text-center flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
                        <span>💡</span>
                        <span>Clue / Hint:</span>
                    </div>
                    <p className="text-slate-100 font-semibold text-sm sm:text-base tracking-wide">
                        &ldquo;{hint}&rdquo;
                    </p>
                </div>

                {/* Masked Word Tiles */}
                <div className="w-full my-2">
                    <MaskedText 
                        text={word} 
                        guessedLetters={guessedLetters} 
                    />
                </div>

                {/* Virtual QWERTY Keyboard */}
                <div className="w-full mt-2 mb-4">
                    <LetterButtons
                        text={word}
                        guessedLetters={guessedLetters}
                        onLetterClick={handleLetterClick}
                        disabled={gameStatus !== "playing"}
                    />
                </div>

            </main>

            {/* Game Over / Victory Modal */}
            <GameOverModal
                isOpen={isModalOpen}
                status={gameStatus}
                word={word}
                hint={hint}
                mistakes={steps}
                maxMistakes={MAX_MISTAKES}
                streak={streak}
                onPlayAgain={handlePlayNextWord}
                onRestartCurrent={handleResetCurrentWord}
                onGoHome={handleGoHome}
            />

            {/* Rules Modal */}
            <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
        </div>
    );
}

export default PlayGame;