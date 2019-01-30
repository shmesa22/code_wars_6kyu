/**
 * Take a string of words, each one containing a single number.
 * If the string is at least 2 words long, create an array of the
 * sorted words, by the number contained in each one, and return
 * the resulting string. Otherwise, return the original string.
 *
 * @param   {String} words - a string of words, each one containing
 * a single number.
 * @returns {String} if the string has 2 or more words, a new sorted string;
 * otherwise the original string.
 */

function order(words){
  const wordsCount = words.split(' ').length;
  if (wordsCount <= 1) return words;

  return Array.from({ length: wordsCount }, (_, index) => {
    const regex = new RegExp(`\\w*${index + 1}\\w*`, 'g');
    return words.match(regex)[0];
  }).join(' ');
}

module.exports = order;
