import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../components/Context/WordContext";
import { WORD_BANK, CATEGORIES, getRandomWord } from "../utils/wordBank";
import Navbar from "../components/Navbar/Navbar";
import RulesModal from "../components/RulesModal/RulesModal";
import Button from "../components/Buttons/Button";
import { sounds } from "../utils/audioUtility";

function HomePage() {
    const { setWordList, setWord } = useContext(WordContext);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isRulesOpen, setIsRulesOpen] = useState(false);
    const [stats] = useState(() => ({
        wins: parseInt(localStorage.getItem('hangman_wins') || '0', 10),
        losses: parseInt(localStorage.getItem('hangman_losses') || '0', 10),
        streak: parseInt(localStorage.getItem('hangman_streak') || '0', 10),
        bestStreak: parseInt(localStorage.getItem('hangman_best_streak') || '0', 10)
    }));

    useEffect(() => {
        // Attempt to start soft BGM
        sounds.startBgm();

        // Autoplay policy fallback: start on first user interaction
        const handleInteraction = () => {
            sounds.startBgm();
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    useEffect(() => {
        async function loadWords() {
            try {
                const response = await fetch('http://localhost:3000/words');
                if (!response.ok) throw new Error("Server error");
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    setWordList(data);
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setWord(data[randomIndex]);
                    return;
                }
            } catch (err) {
                console.log("Using built-in offline Word Bank fallback:", err.message);
            }

            // Fallback to rich built-in word bank
            setWordList(WORD_BANK);
            const initialWord = getRandomWord("All");
            setWord(initialWord);
        }

        loadWords();
    }, [setWordList, setWord]);

    const handleQuickPlay = () => {
        sounds.playClick();
        const chosen = getRandomWord(selectedCategory);
        setWord(chosen);
        navigate("/play", {
            state: {
                wordSelected: chosen,
                category: selectedCategory
            }
        });
    };

    const handleCategoryClick = (cat) => {
        sounds.playClick();
        setSelectedCategory(cat);
    };

    const totalGames = stats.wins + stats.losses;
    const winPercentage = totalGames > 0 ? Math.round((stats.wins / totalGames) * 100) : 0;

    return (
        <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Navbar Header */}
            <Navbar streak={stats.streak} onOpenRules={() => setIsRulesOpen(true)} />

            {/* Main Content Area */}
            <main className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col items-center text-center z-10 flex-grow justify-center">
                
                {/* Hero Floating Character Badge */}
                <div className="relative mb-4 group cursor-pointer" onClick={() => sounds.playClick()}>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 p-1 shadow-2xl shadow-indigo-500/30 animate-float">
                        <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
                            🕹️
                        </div>
                    </div>
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                        2.0 READY
                    </span>
                </div>

                {/* Title */}
                <h1 className="font-fredoka text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
                    <span className="text-gradient-arcade">HANGMAN</span>{" "}
                    <span className="text-white">CHALLENGE</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Test your vocabulary, solve the mystery clues, and rescue the hangman before your <span className="text-rose-400 font-semibold">7 lives</span> run out!
                </p>

                {/* Category Selector Chips */}
                <div className="w-full max-w-lg mb-8">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                        Select Category:
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryClick(cat)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                        isSelected
                                            ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105 border border-cyan-300'
                                            : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700 hover:border-slate-600'
                                    }`}
                                >
                                    {cat === "All" && "🌐 "}
                                    {cat === "Technology" && "💻 "}
                                    {cat === "Animals" && "🦁 "}
                                    {cat === "Countries" && "🗺️ "}
                                    {cat === "Food" && "🍕 "}
                                    {cat === "Sports" && "⚽ "}
                                    {cat === "Science" && "🔬 "}
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Game Modes Action Grid */}
                <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {/* Single Player Card */}
                    <Link
                        to="/play"
                        state={{
                            wordSelected: getRandomWord(selectedCategory),
                            category: selectedCategory
                        }}
                        onClick={() => sounds.playClick()}
                        className="glass-panel-interactive p-5 rounded-2xl flex flex-col items-center text-center group cursor-pointer block"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                            🎯
                        </div>
                        <h3 className="font-fredoka text-lg font-bold text-white mb-1">
                            Single Player
                        </h3>
                        <p className="text-xs text-slate-400 mb-4">
                            Play with smart hints &amp; random words
                        </p>
                        <div className="w-full">
                            <span className="w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-2 rounded-xl text-xs bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 border-b-4 border-indigo-800 transition-all">
                                Play Now 🚀
                            </span>
                        </div>
                    </Link>

                    {/* 2-Player Pass & Play Card */}
                    <Link
                        to="/start"
                        onClick={() => sounds.playClick()}
                        className="glass-panel-interactive p-5 rounded-2xl flex flex-col items-center text-center group cursor-pointer block"
                    >
                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                            👥
                        </div>
                        <h3 className="font-fredoka text-lg font-bold text-white mb-1">
                            2-Player Battle
                        </h3>
                        <p className="text-xs text-slate-400 mb-4">
                            Secret word challenge against a friend
                        </p>
                        <div className="w-full">
                            <span className="w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-2 rounded-xl text-xs bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:from-amber-400 group-hover:to-yellow-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border-b-4 border-amber-700 transition-all">
                                Create Match ⚔️
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Player Lifetime Stats Dashboard */}
                {totalGames > 0 && (
                    <div className="w-full max-w-md glass-panel p-4 rounded-2xl flex items-center justify-around border border-slate-800 text-center">
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Played</span>
                            <span className="text-base font-bold text-slate-100">{totalGames}</span>
                        </div>
                        <div className="w-px h-8 bg-slate-800" />
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Won</span>
                            <span className="text-base font-bold text-emerald-400">{stats.wins} ({winPercentage}%)</span>
                        </div>
                        <div className="w-px h-8 bg-slate-800" />
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Best Streak</span>
                            <span className="text-base font-bold text-amber-400">🔥 {stats.bestStreak}</span>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="w-full py-4 text-center text-xs text-slate-500 z-10">
                <span>Built for fun &amp; learning • Press letters on your keyboard to play</span>
            </footer>

            {/* Rules Modal */}
            <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
        </div>
    );
}

export default HomePage;