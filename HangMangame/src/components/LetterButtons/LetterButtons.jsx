const KEYBOARD_ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
];

function LetterButtons({ text = "", guessedLetters = [], onLetterClick, disabled = false }) {
    const originalLetters = new Set((text || "").toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters.map(l => l.toUpperCase()));

    const getButtonStyle = (letter) => {
        if (guessedLettersSet.has(letter)) {
            if (originalLetters.has(letter)) {
                // Correct guess - Emerald Glow
                return 'bg-emerald-600 border-emerald-400 text-white shadow-md shadow-emerald-500/30 opacity-90 cursor-not-allowed scale-95';
            } else {
                // Wrong guess - Muted Crimson
                return 'bg-rose-950/70 border-rose-900/80 text-rose-400/50 opacity-40 cursor-not-allowed scale-90 line-through';
            }
        }
        // Unselected key - Tactile Arcade Keycap
        return 'bg-slate-800 hover:bg-indigo-600 text-slate-100 hover:text-white border-b-3 sm:border-b-4 border-slate-950 active:border-b-0 active:translate-y-1 shadow-md hover:shadow-indigo-500/25 hover:border-indigo-800 cursor-pointer transition-all duration-100';
    };

    const handleKeyClick = (letter) => {
        if (disabled || guessedLettersSet.has(letter)) return;
        onLetterClick?.(letter);
    };

    return (
        <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-1.5 sm:gap-2 px-2 py-3 select-none">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1 sm:gap-1.5 w-full">
                    {row.map((letter) => {
                        const isGuessed = guessedLettersSet.has(letter);
                        return (
                            <button
                                key={letter}
                                type="button"
                                value={letter}
                                onClick={() => handleKeyClick(letter)}
                                disabled={disabled || isGuessed}
                                className={`h-10 w-8 sm:h-12 sm:w-11 md:h-13 md:w-12 rounded-lg sm:rounded-xl font-fredoka font-bold text-sm sm:text-base border flex items-center justify-center ${getButtonStyle(letter)}`}
                            >
                                {letter}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default LetterButtons;