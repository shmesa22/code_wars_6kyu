/**
 * Create an array of 'word' characters (lowercase). For each character check if it is unique.
 * If it is not unique add memoize it (isRepeated) so we don't have to check again for
 * that character repetition and replace that character with ')'. If it is
 * unique, replace that character with '('. Lastly, join the resulting array.
 *
 * @param   {String} word a word to be encoded
 * @returns {String} a encoded string where '(' represents unique characters and ')'
 * non unique characters
 */

function duplicateEncode(word){
  const isRepeated = {}

  return word.toLowerCase().split('').map((letter, index, lowercaseWord) => {
    debugger;
    if(index !== lowercaseWord.lastIndexOf(letter) || isRepeated[letter]) {
      isRepeated[letter] = true;
      return ')';
    }

    return '(';
  }).join('');
}

duplicateEncode("Success")

module.exports = duplicateEncode;
