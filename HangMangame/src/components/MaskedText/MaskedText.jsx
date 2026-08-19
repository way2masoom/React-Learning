import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text = "", guessedLetters = [] }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-4 px-2 select-none">
            {maskedString.map((letter, index) => {
                const isRevealed = letter !== "_";
                const isSpace = text[index] === " ";

                if (isSpace) {
                    return <span key={index} className="w-4 sm:w-6" />;
                }

                return (
                    <div
                        key={index}
                        className={`w-10 h-13 sm:w-12 sm:h-16 rounded-xl flex items-center justify-center font-fredoka font-bold text-xl sm:text-2xl transition-all duration-300 ${
                            isRevealed
                                ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20 animate-letter-reveal scale-100'
                                : 'bg-slate-900/80 border-2 border-dashed border-slate-700 text-transparent shadow-inner'
                        }`}
                    >
                        {isRevealed ? letter : <span className="w-4 h-1 bg-slate-600 rounded-full" />}
                    </div>
                );
            })}
        </div>
    );
}

export default MaskedText;