/**
 * takes in a positive number and returns its multiplicative persistence, which is the number of times you must multiply the digits in number until you reach a single digit.
 *
 * @param	  {number} num
 * @returns	{number}
 */

function persistence(num) {
  let count = 0;
  let stringNumber = num.toString();

  while(stringNumber / 10 >= 1) {
    let digits = stringNumber.split('');
    stringNumber =
      digits
        .reduce((result, digit) => result * digit, 1)
        .toString();

    count++;
  }

  return count;
}

module.exports = persistence;
