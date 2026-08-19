import Button from "../Buttons/Button";

function RulesModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop">
            <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl text-left">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                        <span className="text-2xl">📜</span>
                        <h3 className="font-fredoka text-2xl font-bold text-slate-100">
                            How to Play
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Rules Content */}
                <div className="py-4 space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                            1
                        </div>
                        <p>
                            <strong className="text-white">Guess the Mystery Word:</strong> Pick letters using the on-screen keyboard or typing on your physical keyboard.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                            2
                        </div>
                        <p>
                            <strong className="text-emerald-400">Correct Guesses</strong> will reveal matching positions in the hidden word tiles.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">
                            3
                        </div>
                        <p>
                            <strong className="text-rose-400">Wrong Guesses</strong> draw a new part of the Hangman. You have <strong className="text-white">7 lives</strong> before it&apos;s Game Over!
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                            4
                        </div>
                        <p>
                            <strong className="text-amber-400">2-Player Mode:</strong> One player secretly enters a custom word &amp; clue, and the second player tries to solve it!
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-slate-800 flex justify-end">
                    <Button
                        text="Got it, Let's Play!"
                        styleType="primary"
                        onClickHandler={onClose}
                        className="w-full sm:w-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default RulesModal;
