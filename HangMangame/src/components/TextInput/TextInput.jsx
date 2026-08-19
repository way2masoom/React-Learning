function TextInput({ 
    type = "text", 
    label, 
    value = "",
    placeholder = "Enter your text here", 
    onChangeHandler, 
    icon = null,
    helperText = null,
    maxLength = 20
}) {
    return (
        <div className="w-full flex flex-col gap-1.5 text-left">
            {label && (
                <label className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center justify-between">
                    <span>{label}</span>
                    {maxLength && (
                        <span className="text-[11px] text-slate-500 font-normal">
                            {value?.length || 0}/{maxLength}
                        </span>
                    )}
                </label>
            )}
            <div className="relative flex items-center">
                {icon && (
                    <span className="absolute left-3.5 text-slate-400 pointer-events-none text-base">
                        {icon}
                    </span>
                )}
                <input
                    type={type}
                    value={value}
                    maxLength={maxLength}
                    className={`w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none text-sm sm:text-base transition-all font-medium ${
                        icon ? 'pl-10' : ''
                    }`}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
            {helperText && (
                <span className="text-[11px] text-slate-400 pl-1">{helperText}</span>
            )}
        </div>
    );
}

export default TextInput;