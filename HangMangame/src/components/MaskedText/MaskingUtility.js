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
export function getMaskedString(originalWord, guessedLetters) {

    console.log("guessed letters", guessedLetters);
    guessedLetters = guessedLetters.map(Letters =>
        Letters.toUpperCase()
    ); // convert all guessed letters to uppercase to match with the original word

    const guessedLetterSet = new Set(guessedLetters) // Set is dataStructure to store unique guessed letters for faster lookup

    /** 
    * split function is used to split the original word into an array of characters.
    * @param {originalWord} "HUMBLE"
    * @param {split('')} ['H', 'U', 'M', 'B', 'L', 'E']
    */
   
    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_" // ['H'_'M''B'_'E']
        }
    });

    return result;

}