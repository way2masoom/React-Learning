// Enhanced button styles with gradients, borders, and tactile shadows

function getButtonStyling(styleType) {
    switch (styleType) {
        case "primary":
            return "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1";
        case "secondary":
            return "bg-slate-700 hover:bg-slate-600 text-slate-100 shadow-md border-b-4 border-slate-900 active:border-b-0 active:translate-y-1";
        case "error":
            return "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-rose-500/25 border-b-4 border-rose-900 active:border-b-0 active:translate-y-1";
        case "success":
        case "sucess":
            return "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1";
        case "warning":
            return "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border-b-4 border-amber-700 active:border-b-0 active:translate-y-1";
        case "arcade":
            return "bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 hover:brightness-110 text-white shadow-lg shadow-purple-500/30 border-b-4 border-purple-900 active:border-b-0 active:translate-y-1";
        case "ghost":
            return "bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 active:translate-y-0.5";
        default:
            return "bg-blue-600 hover:bg-blue-500 text-white border-b-4 border-blue-800 active:border-b-0 active:translate-y-1";
    }
}

export default getButtonStyling;