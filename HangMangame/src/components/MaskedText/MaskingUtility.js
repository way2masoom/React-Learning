/**
 * 
 * @param {The word which give as input and expeted to be guessedLetter} originalWord 
 * @param {Letters which are guessed by the User Allready } guessedLetter 
 * Ex: original word =['HUMBLE']
 * Guessed Word = ['H'_'M''B'_'E']
 * 
 *  return -> " H _ M _ E "
*/


// Utility/Helper `function for Hidden text`
export function getMaskedSting(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(Letters => Letters.toUpperCase()) // 

    const guessedLetterSet = new Set(guessedLetters)

    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_" // ['H'_'M''B'_'E']
        }
    });

    return result.join(' ')

}