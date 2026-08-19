import { useState } from "react";
import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import Navbar from "../components/Navbar/Navbar";
import RulesModal from "../components/RulesModal/RulesModal";

function StartGame() {
    const [isRulesOpen, setIsRulesOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <Navbar onOpenRules={() => setIsRulesOpen(true)} />

            {/* Main Container */}
            <main className="w-full max-w-xl mx-auto px-4 py-6 flex flex-col items-center text-center z-10 flex-grow justify-center">
                
                {/* Mode Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-3xl shadow-xl shadow-amber-500/20 mb-4 animate-float">
                    ⚔️
                </div>

                {/* Title */}
                <h1 className="font-fredoka text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    2-PLAYER <span className="text-amber-400">BATTLE</span>
                </h1>

                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6">
                    <strong className="text-white">Player 1:</strong> Enter a secret word and a hint without letting Player 2 peek!
                </p>

                {/* Setup Card */}
                <div className="glass-panel w-full p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
                    <TextInputFormContainer />
                </div>

                {/* Steps hint */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6 text-left">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <span className="text-[11px] font-bold text-amber-400 block mb-0.5">👤 Player 1</span>
                        <p className="text-[11px] text-slate-400">Picks the mystery word and writes a smart clue.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <span className="text-[11px] font-bold text-cyan-400 block mb-0.5">👥 Player 2</span>
                        <p className="text-[11px] text-slate-400">Takes the screen to guess letter by letter!</p>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="mt-6">
                    <Link
                        to="/"
                        className="text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                        <span>←</span> Back to Main Menu
                    </Link>
                </div>

            </main>

            {/* Footer */}
            <footer className="w-full py-4 text-center text-xs text-slate-500 z-10">
                <span>Hangman 2-Player Pass &amp; Play Edition</span>
            </footer>

            {/* Rules Modal */}
            <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
        </div>
    );
}

export default StartGame;