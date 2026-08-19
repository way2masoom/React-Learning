import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sounds } from '../../utils/audioUtility';

function Navbar({ streak = 0, onOpenRules }) {
    const location = useLocation();
    const [muted, setMuted] = useState(sounds.isMuted);
    const [bgmActive, setBgmActive] = useState(sounds.isBgmActive);

    const handleSoundToggle = () => {
        const nextState = sounds.toggleMute();
        setMuted(nextState);
        if (!nextState) {
            sounds.playClick();
        }
    };

    return (
        <header className="w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-between z-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                    🎮
                </div>
                <div className="flex flex-col">
                    <span className="font-fredoka font-bold text-xl tracking-wide bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                        HANGMAN <span className="text-cyan-400">ARCADE</span>
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">Word Guess Challenge</span>
                </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
                {/* Streak Badge */}
                {streak > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold shadow-inner">
                        <span>🔥</span>
                        <span>{streak} {streak === 1 ? 'Streak' : 'Streaks'}</span>
                    </div>
                )}

                {/* Rules Modal Button */}
                {onOpenRules && (
                    <button
                        onClick={onOpenRules}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="How to play"
                    >
                        <span>📖</span>
                        <span className="hidden sm:inline">Rules</span>
                    </button>
                )}

                {/* Music Toggle */}
                <button
                    onClick={() => {
                        const nextBgm = sounds.toggleBgm();
                        setBgmActive(nextBgm);
                    }}
                    className={`px-2.5 h-9 rounded-xl flex items-center gap-1.5 border transition-all cursor-pointer text-xs font-semibold ${
                        bgmActive && !muted
                            ? 'bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-500/25 shadow-sm shadow-fuchsia-500/20'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                    title={bgmActive && !muted ? "Pause Background Music" : "Play Background Music"}
                    aria-label="Toggle Background Music"
                >
                    <span className={bgmActive && !muted ? "animate-bounce" : ""}>🎵</span>
                    <span className="hidden md:inline">{bgmActive && !muted ? "Music ON" : "Music OFF"}</span>
                </button>

                {/* Sound Mute Toggle */}
                <button
                    onClick={handleSoundToggle}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                        muted 
                            ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20' 
                            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
                    }`}
                    title={muted ? "Unmute Sound" : "Mute Sound"}
                    aria-label="Toggle Sound"
                >
                    <span className="text-base">{muted ? '🔇' : '🔊'}</span>
                </button>

                {/* Navigation Shortcut */}
                {location.pathname !== '/' && (
                    <Link
                        to="/"
                        className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                        title="Home"
                    >
                        🏠
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Navbar;
