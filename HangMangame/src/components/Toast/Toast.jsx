import { useEffect } from 'react';

function Toast({ message, type = 'info', onClose }) {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => {
            onClose?.();
        }, 2600);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!message) return null;

    const bgStyles = {
        success: 'bg-emerald-500/90 border-emerald-400 text-white shadow-emerald-500/30',
        error: 'bg-rose-500/90 border-rose-400 text-white shadow-rose-500/30',
        warning: 'bg-amber-500/90 border-amber-400 text-slate-950 font-bold shadow-amber-500/30',
        info: 'bg-indigo-600/90 border-indigo-400 text-white shadow-indigo-500/30'
    }[type] || 'bg-slate-800 border-slate-600 text-white';

    const icons = {
        success: '🎯',
        error: '❌',
        warning: '⚠️',
        info: '💡'
    }[type] || '🔔';

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-pop">
            <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border backdrop-blur-md shadow-xl text-sm font-medium tracking-wide ${bgStyles}`}>
                <span className="text-base">{icons}</span>
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Toast;
