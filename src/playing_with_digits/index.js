/**
 * Take each digit of an integer to the successive powers of p,
 * divide it by the initial integer. Lastly, check if the resulting
 * number is an integer.
 *
 * @param   {Number} n - positive integer
 * @param	  {Number} p - positive integer, initial power
 * @returns {Number} Integer that can be multiplied by n and the
 * result is equal to the sum of the digits of n taken to the
 * successive powers of p, if no such number exists return -1.
 */

function digPow(n, p){
  const sumOfPowDigits =
    `${n}`
      .split('')
      .reduce((sum, num, index) => sum + (Math.pow(num, index + p)), 0);
  const k = sumOfPowDigits / n;

  return Number.isInteger(k) ? k : -1;
}

module.exports = digPow;
