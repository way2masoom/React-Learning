import Button from "../Buttons/Button";

function GameOverModal({ 
    isOpen, 
    status, // 'win' | 'lose'
    word, 
    hint, 
    mistakes = 0, 
    maxMistakes = 7,
    streak = 0,
    onPlayAgain, 
    onRestartCurrent,
    onGoHome
}) {
    if (!isOpen) return null;

    const isWin = status === 'win';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop">
            <div className={`relative w-full max-w-md p-6 sm:p-8 rounded-3xl border shadow-2xl text-center overflow-hidden ${
                isWin 
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/60 border-emerald-500/40 shadow-emerald-500/20' 
                    : 'bg-gradient-to-b from-slate-900 via-slate-900 to-rose-950/60 border-rose-500/40 shadow-rose-500/20'
            }`}>
                {/* Background decorative glow */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none ${
                    isWin ? 'bg-emerald-400' : 'bg-rose-600'
                }`} />

                {/* Status Emoji / Icon */}
                <div className="text-6xl sm:text-7xl mb-3 animate-bounce">
                    {isWin ? '🏆' : '💀'}
                </div>

                {/* Title */}
                <h2 className={`font-fredoka text-3xl sm:text-4xl font-extrabold tracking-wide mb-2 ${
                    isWin ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                    {isWin ? 'VICTORY!' : 'GAME OVER!'}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base mb-5">
                    {isWin 
                        ? 'Incredible job! You saved the hangman in time!' 
                        : 'Oh no! The hangman was caught. Better luck next time!'}
                </p>

                {/* Secret Word Box */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 mb-5 shadow-inner">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-1">
                        The Secret Word Was
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5 my-2">
                        {word?.toUpperCase().split('').map((char, index) => (
                            <span 
                                key={index} 
                                className={`w-8 h-10 rounded-lg flex items-center justify-center font-fredoka font-bold text-lg border ${
                                    isWin 
                                        ? 'bg-emerald-950 border-emerald-500/50 text-emerald-300' 
                                        : 'bg-rose-950 border-rose-500/50 text-rose-300'
                                }`}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    {hint && (
                        <p className="text-xs text-slate-400 italic mt-2">
                            💡 <span className="text-slate-300">{hint}</span>
                        </p>
                    )}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50">
                        <span className="text-[11px] text-slate-400 block">Mistakes</span>
                        <span className="text-base font-bold text-slate-200">
                            {mistakes} / {maxMistakes}
                        </span>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50">
                        <span className="text-[11px] text-slate-400 block">Current Streak</span>
                        <span className="text-base font-bold text-amber-400">
                            🔥 {streak}
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                    <Button
                        text={isWin ? "Next Word 🚀" : "Try Another Word 🔁"}
                        styleType={isWin ? "success" : "primary"}
                        onClickHandler={onPlayAgain}
                        className="w-full py-3 text-base shadow-lg"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            text="Retry Word"
                            styleType="secondary"
                            onClickHandler={onRestartCurrent}
                            className="text-xs py-2"
                        />
                        <Button
                            text="Home"
                            styleType="ghost"
                            onClickHandler={onGoHome}
                            className="text-xs py-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameOverModal;
