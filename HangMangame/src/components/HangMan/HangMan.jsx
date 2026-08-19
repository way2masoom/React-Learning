import Level1 from "../../assets/images/1.svg"
import Level2 from "../../assets/images/2.svg"
import Level3 from "../../assets/images/3.svg"
import Level4 from "../../assets/images/4.svg"
import Level5 from "../../assets/images/5.svg"
import Level6 from "../../assets/images/6.svg"
import Level7 from "../../assets/images/7.svg"
import Level8 from "../../assets/images/8.svg"

function Hangman({ steps = 0, maxSteps = 7 }) {
    const hangmanImages = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];
    const imageIndex = Math.min(steps, hangmanImages.length - 1);
    const livesRemaining = Math.max(0, maxSteps - steps);
    const isDanger = steps >= 5;

    return (
        <div className="relative flex flex-col items-center">
            {/* Glow / Frame Box */}
            <div className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-4 flex items-center justify-center transition-all duration-300 ${
                isDanger 
                    ? 'bg-rose-950/40 border-2 border-rose-500/60 shadow-xl shadow-rose-600/20 animate-danger-pulse' 
                    : 'bg-slate-900/60 border border-slate-700/60 shadow-xl shadow-indigo-900/10'
            }`}>
                {/* Visual Step Indicator Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-xs font-medium text-slate-300 backdrop-blur-md">
                    Stage <span className="font-bold text-cyan-400">{steps}</span>/{maxSteps}
                </div>

                {/* Main Hangman Stage Image */}
                <img 
                    src={hangmanImages[imageIndex]}
                    alt={`Hangman Stage ${steps}`}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300" 
                />
            </div>

            {/* Lives / Danger Alert Bar */}
            <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Lives:
                </span>
                <div className="flex items-center gap-1">
                    {Array.from({ length: maxSteps }).map((_, i) => (
                        <span
                            key={i}
                            className={`text-sm transition-all duration-300 ${
                                i < livesRemaining 
                                    ? 'scale-100 opacity-100' 
                                    : 'scale-75 opacity-20 grayscale'
                            }`}
                        >
                            ❤️
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hangman;