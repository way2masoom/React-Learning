import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ 
    inputType, 
    value,
    hint,
    error,
    handleFormSubmit, 
    handleTextInputChange, 
    handleHintInputChange, 
    handleShowHideClick,
    handleRandomWordFill
}) {
    return (
        <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
            {/* Mystery Word Input */}
            <div className="relative">
                <TextInput
                    type={inputType}
                    value={value}
                    label="Secret Word (Player 1)"
                    placeholder="e.g. ASTRONAUT, DRAGON"
                    onChangeHandler={handleTextInputChange}
                    icon="🔒"
                    helperText="Only letters (A-Z). No special symbols or numbers."
                    maxLength={16}
                />
                <button
                    type="button"
                    onClick={handleShowHideClick}
                    className="absolute right-3 top-9 text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                >
                    {inputType === "password" ? "👁️ Show" : "🙈 Hide"}
                </button>
            </div>

            {/* Hint Input */}
            <div>
                <TextInput
                    type="text"
                    value={hint}
                    label="Clue / Hint for Player 2"
                    placeholder="e.g. Travels into outer space"
                    onChangeHandler={handleHintInputChange}
                    icon="💡"
                    helperText="Give a smart hint without giving the word away!"
                    maxLength={50}
                />
            </div>

            {/* Error Message if any */}
            {error && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs text-center font-medium animate-shake">
                    ⚠️ {error}
                </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                    type="button"
                    onClick={handleRandomWordFill}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                    <span>🎲</span>
                    <span>Random Idea</span>
                </button>

                <Button
                    text="Start Battle ⚔️"
                    type="submit"
                    styleType="primary"
                    className="flex-1 py-3 text-sm font-bold"
                />
            </div>
        </form>
    );
}

export default TextInputForm;