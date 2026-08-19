/**
 * Generates masked letter array for Hangman display
 * @param {string} originalWord 
 * @param {string[]} guessedLetters 
 * @returns {string[]}
 */
export function getMaskedString(originalWord = "", guessedLetters = []) {
    if (!originalWord) return [];

    const formattedGuessed = (guessedLetters || []).map(l => String(l).toUpperCase());
    const guessedLetterSet = new Set(formattedGuessed);

    return originalWord.toUpperCase().split('').map(char => {
        if (char === " ") return " ";
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    });
}